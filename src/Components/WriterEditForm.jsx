// import { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";

// const API = import.meta.env.VITE_BASE_URL;

// function WriterEditForm() {
//   let { id } = useParams();
//   const navigate = useNavigate();

//   const [writer, setWriter] = useState({
//     name: "",
//     biography: "",
//     picture_url: "",
//     is_active: false,
//   });

//   const handleTextChange = (event) => {
//     const { id, value, type, checked } = event.target;
//     setWriter({
//       ...writer,
//       [id]: type === "checkbox" ? checked : value,
//     });
//   };

//   // Update a writer. Redirect to show view
//   const updateWriter = () => {
//     fetch(`${API}/writers/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(writer),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then(() => navigate(`/writers/${id}`))
//       .catch((error) => console.error("catch", error));
//   };

//   // On page load, fill in the form with the writer data.
//   useEffect(() => {
//     fetch(`${API}/writers/${id}`)
//       .then((response) => response.json())
//       .then((responseJSON) => {
//         setWriter(responseJSON);
//       })
//       .catch((error) => console.error(error));
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateWriter();
//   };

//   return (
//     <div className="Edit">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           id="name"
//           value={writer.name}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Name of the Writer"
//           required
//         />
//         <label htmlFor="biography">Biography:</label>
//         <textarea
//           id="biography"
//           value={writer.biography}
//           onChange={handleTextChange}
//           placeholder="Write a short biography of the writer"
//         />
//         <label htmlFor="picture_url">Picture URL:</label>
//         <input
//           id="picture_url"
//           value={writer.picture_url}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="URL of the writer's picture"
//         />
//         <label htmlFor="is_active">
//           <input
//             id="is_active"
//             type="checkbox"
//             checked={writer.is_active}
//             onChange={handleTextChange}
//           />
//           Active
//         </label>
//         <br />
//         <input type="submit" value="Save Changes" />
//       </form>
//       <Link to={`/writers/${id}`}>
//         <button>Cancel</button>
//       </Link>
//     </div>
//   );
// }

// export default WriterEditForm;

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";

const API = import.meta.env.VITE_BASE_URL;

function WriterEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [writer, setWriter] = useState({
    name: "",
    biography: "",
    picture_url: "",
    is_active: false,
  });

  const handleTextChange = (event) => {
    const { id, value, type, checked } = event.target;
    setWriter((prevWriter) => ({
      ...prevWriter,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const updateWriter = () => {
    fetch(`${API}/writers/${id}`, {
      method: "PUT",
      body: JSON.stringify(writer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => navigate(`/writers/${id}`))
      .catch((error) => console.error("catch", error));
  };

  useEffect(() => {
    fetch(`${API}/writers/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setWriter((prevWriter) => ({
          ...prevWriter,
          ...responseJSON,
        }));
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateWriter();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Edit Writer
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              id="name"
              label="Name"
              value={writer.name || ""}
              onChange={handleTextChange}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              id="biography"
              label="Biography"
              value={writer.biography || ""}
              onChange={handleTextChange}
              fullWidth
              multiline
              rows={4}
            />
          </Box>
          <Box mb={2}>
            <TextField
              id="picture_url"
              label="Picture URL"
              value={writer.picture_url || ""}
              onChange={handleTextChange}
              fullWidth
            />
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                id="is_active"
                checked={writer.is_active || false}
                onChange={handleTextChange}
              />
            }
            label="Active"
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Save Changes
            </Button>
            <Link to={`/writers/${id}`} style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="secondary" sx={{ ml: 2 }}>
                Cancel
              </Button>
            </Link>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default WriterEditForm;
