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

const API = import.meta.env.VITE_BASE_URL;

function ReviewForm({ reviewDetails, toggleView, toggleEditView }) {
  let { id } = useParams(); // Assumes id is short.id

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    is_liked: false,
    short_id: id,
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
      is_liked: false,
      short_id: id,
    });
    console.log("Form submitted");
  };

  const handleSubmit = (review, id) => {
    console.log("Submitting review:", review); // Debugging log
    fetch(`${API}/writers/${id}/shorts/${id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })

      .then((data) => {
        toggleEditView((prevState) => {
          !prevState;
        });
        console.log("Response data:", JSON.stringify(data));
        // Handle response data
      })
      .catch((error) => {
        console.error("Error:", error); // Log any errors
      });
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        padding: 2,
        borderRadius: 1,
        boxShadow: 3,
        maxWidth: 600,
        margin: "auto",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Add a New Review
      </Typography>
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
        id="content"
        label="Review"
        variant="outlined"
        multiline
        rows={4}
        value={review.content}
        onChange={handleTextChange}
        fullWidth
        required
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
    </Box>
  );
}

export default ReviewForm;
