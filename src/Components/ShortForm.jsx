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

function ShortForm({ shortDetails, handleSubmit, toggleView, children }) {
  let { id } = useParams(); // Assumes id is short.id

  const [short, setShort] = useState({
    name: "",
    url: "",
    category: "",
    description: "",
    is_favorite: false,
    writer_id: id, // Updated to writer_id
    picture_url: "", // Added for new schema
  });

  const handleTextChange = (event) => {
    setShort({ ...short, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setShort({ ...short, [event.target.id]: event.target.checked });
  };

  useEffect(() => {
    if (shortDetails) {
      setShort(shortDetails);
    }
  }, [id, shortDetails]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(short, id);
    if (shortDetails) {
      toggleView();
    }
    setShort({
      name: "",
      url: "",
      category: "",
      description: "",
      is_favorite: false,
      writer_id: id,
      picture_url: "",
    });
    console.log("Form submitted");
  };

  return (
    <Box component="div" sx={{ p: 3 }}>
      {children}
      <Typography variant="h6" gutterBottom>
        {shortDetails ? "Edit Short" : "Add a New Short"}
      </Typography>
      <form onSubmit={onSubmit}>
        <Box mb={2}>
          <TextField
            id="name"
            label="Name"
            value={short.name}
            onChange={handleTextChange}
            fullWidth
            placeholder="Name of the short"
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="url"
            label="URL"
            value={short.url}
            onChange={handleTextChange}
            fullWidth
            placeholder="URL of the short"
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="category"
            label="Category"
            value={short.category}
            onChange={handleTextChange}
            fullWidth
            placeholder="Category of the short"
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="description"
            label="Description"
            value={short.description}
            onChange={handleTextChange}
            fullWidth
            multiline
            rows={4}
            placeholder="Description of the short"
          />
        </Box>
        <Box mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                id="is_favorite"
                checked={short.is_favorite}
                onChange={handleCheckboxChange}
              />
            }
            label="Favorite"
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="picture_url"
            label="Picture URL"
            value={short.picture_url}
            onChange={handleTextChange}
            fullWidth
            placeholder="URL of the picture"
          />
        </Box>
        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default ShortForm;
