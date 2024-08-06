// import { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import {
//   Container,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Button,
//   Typography,
//   Box,
//   Paper,
// } from "@mui/material";

// const API = import.meta.env.VITE_BASE_URL;

// function ShortEditForm() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [short, setShort] = useState({
//     name: "",
//     url: "",
//     category: "",
//     description: "",
//     picture_url: "",
//     is_favorite: false,
//   });

//   const handleTextChange = (event) => {
//     const { id, value, type, checked } = event.target;
//     setShort((prevShort) => ({
//       ...prevShort,
//       [id]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const updateShort = () => {
//     fetch(`${API}/writers/${id}/shorts/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(short),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then(() => navigate(`/shorts/${id}`))
//       .catch((error) => console.error("Error updating short:", error));
//   };

//   useEffect(() => {
//     fetch(`${API}/writers/${id}/shorts/${id}`)
//       .then((response) => response.json())
//       .then((responseJSON) => {
//         setShort((prevShort) => ({
//           ...prevShort,
//           ...responseJSON,
//         }));
//       })
//       .catch((error) => console.error("Error fetching short:", error));
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateShort();
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Paper sx={{ padding: 3 }}>
//         <Typography variant="h5" gutterBottom>
//           Edit Short
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Box mb={2}>
//             <TextField
//               id="name"
//               label="Name"
//               value={short.name || ""}
//               onChange={handleTextChange}
//               fullWidth
//               required
//             />
//           </Box>
//           <Box mb={2}>
//             <TextField
//               id="url"
//               label="URL"
//               value={short.url || ""}
//               onChange={handleTextChange}
//               fullWidth
//             />
//           </Box>
//           <Box mb={2}>
//             <TextField
//               id="category"
//               label="Category"
//               value={short.category || ""}
//               onChange={handleTextChange}
//               fullWidth
//             />
//           </Box>
//           <Box mb={2}>
//             <TextField
//               id="description"
//               label="Description"
//               value={short.description || ""}
//               onChange={handleTextChange}
//               fullWidth
//               multiline
//               rows={4}
//             />
//           </Box>
//           <Box mb={2}>
//             <TextField
//               id="picture_url"
//               label="Picture URL"
//               value={short.picture_url || ""}
//               onChange={handleTextChange}
//               fullWidth
//             />
//           </Box>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 id="is_favorite"
//                 checked={short.is_favorite || false}
//                 onChange={handleTextChange}
//               />
//             }
//             label="Favorite"
//           />
//           <Box mt={2}>
//             <Button type="submit" variant="contained" color="primary">
//               Save Changes
//             </Button>
//             <Link to={`/shorts/${id}`} style={{ textDecoration: "none" }}>
//               <Button variant="outlined" color="secondary" sx={{ ml: 2 }}>
//                 Cancel
//               </Button>
//             </Link>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// }

// export default ShortEditForm;

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

function ShortEditForm({ toggleView }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [short, setShort] = useState({
    name: "",
    url: "",
    category: "",
    description: "",
    picture_url: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    const { id, value, type, checked } = event.target;
    setShort((prevShort) => ({
      ...prevShort,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const updateShort = () => {
    fetch(`${API}/writers/${id}/shorts/${id}`, {
      method: "PUT",
      body: JSON.stringify(short),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => toggleView((prevState) => !prevState))
      .catch((error) => console.error("Error updating short:", error));
  };

  useEffect(() => {
    fetch(`${API}/writers/${id}/shorts/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setShort((prevShort) => ({
          ...prevShort,
          ...responseJSON,
        }));
      })
      .catch((error) => console.error("Error fetching short:", error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateShort();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Edit Short
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              id="name"
              label="Name"
              value={short.name || ""}
              onChange={handleTextChange}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              id="url"
              label="URL"
              value={short.url || ""}
              onChange={handleTextChange}
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <TextField
              id="category"
              label="Category"
              value={short.category || ""}
              onChange={handleTextChange}
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <TextField
              id="description"
              label="Description"
              value={short.description || ""}
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
              value={short.picture_url || ""}
              onChange={handleTextChange}
              fullWidth
            />
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                id="is_favorite"
                checked={short.is_favorite || false}
                onChange={handleTextChange}
              />
            }
            label="Favorite"
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Save Changes
            </Button>
            <Link to={`/shorts/${id}`} style={{ textDecoration: "none" }}>
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

export default ShortEditForm;
