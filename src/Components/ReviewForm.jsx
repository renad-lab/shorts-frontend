import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  Typography,
} from "@mui/material";

function ReviewForm({ reviewDetails, handleSubmit, toggleView, children }) {
  let { id } = useParams(); // Assumes id is short.id

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    is_liked: false, // New field for the schema
    short_id: id, // Updated to use short_id
  });

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setReview({ ...review, is_liked: event.target.checked });
  };

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(review, id); // Passes short_id to handleSubmit
    if (reviewDetails) {
      toggleView();
    }
    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      is_liked: false, // Reset is_liked
      short_id: id, // Updated to use short_id
    });
    console.log("Form submitted");
  };

  return (
    <Box
      component="div"
      className="Edit"
      sx={{ padding: 2, borderRadius: 1, boxShadow: 3 }}
    >
      {children}
      <form onSubmit={onSubmit}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Add a New Review</Typography>
        </Box>
        <TextField
          id="reviewer"
          label="Name"
          variant="outlined"
          value={review.reviewer}
          onChange={handleTextChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          value={review.title}
          onChange={handleTextChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          id="rating"
          label="Rating"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 5, step: 1 } }}
          variant="outlined"
          value={review.rating}
          onChange={handleTextChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          id="content"
          label="Review"
          variant="outlined"
          multiline
          rows={4}
          value={review.content}
          onChange={handleTextChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              id="is_liked"
              checked={review.is_liked}
              onChange={handleCheckboxChange}
            />
          }
          label="Like"
        />
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default ReviewForm;
