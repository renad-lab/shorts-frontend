// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
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

// function ReviewEditForm({ reviewDetails, toggleView, handleSubmit }) {
//   const navigate = useNavigate();

//   const [review, setReview] = useState({
//     reviewer: "",
//     title: "",
//     content: "",
//     is_liked: false,
//   });

//   useEffect(() => {
//     setReview(reviewDetails); // Set review details when the component mounts
//   }, [reviewDetails]);

//   const handleTextChange = (event) => {
//     const { id, value, type, checked } = event.target;
//     setReview((prevReview) => ({
//       ...prevReview,
//       [id]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const updateReview = () => {
//     fetch(`${API}/shorts/${id}/shorts/${id}/reviews/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(review),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then(() => {
//         navigate(`/shorts/${reviewDetails.shortId}`);
//         toggleView(); // Toggle view after update
//       })
//       .catch((error) => console.error("catch", error));
//   };

//   const handleSubmitForm = (event) => {
//     event.preventDefault();
//     updateReview();
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Paper sx={{ padding: 3 }}>
//         <Typography variant="h5" gutterBottom>
//           Edit Review
//         </Typography>
//         <form onSubmit={handleSubmitForm}>
//           <Box mb={2}>
//             <TextField
//               id="reviewer"
//               label="Reviewer"
//               value={review.reviewer || ""}
//               onChange={handleTextChange}
//               fullWidth
//               required
//             />
//           </Box>
//           <Box mb={2}>
//             <TextField
//               id="title"
//               label="Title"
//               value={review.title || ""}
//               onChange={handleTextChange}
//               fullWidth
//               required
//             />
//           </Box>
//           <Box mb={2}>
//             <TextField
//               id="content"
//               label="Content"
//               value={review.content || ""}
//               onChange={handleTextChange}
//               fullWidth
//               multiline
//               rows={4}
//             />
//           </Box>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 id="is_liked"
//                 checked={review.is_liked || false}
//                 onChange={handleTextChange}
//               />
//             }
//             label="Liked"
//           />
//           <Box mt={2}>
//             <Button type="submit" variant="contained" color="primary">
//               Save Changes
//             </Button>
//             <Button
//               type="button"
//               variant="outlined"
//               color="secondary"
//               sx={{ ml: 2 }}
//               onClick={toggleView}
//             >
//               Cancel
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// }

// export default ReviewEditForm;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
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

// function ReviewEditForm({ reviewDetails, toggleView, handleSubmit }) {
//   const navigate = useNavigate();

//   const [review, setReview] = useState({
//     reviewer: "",
//     title: "",
//     content: "",
//     is_liked: false,
//   });

//   useEffect(() => {
//     setReview(reviewDetails); // Set review details when the component mounts
//   }, [reviewDetails]);

//   const handleTextChange = (event) => {
//     const { id, value, type, checked } = event.target;
//     setReview((prevReview) => ({
//       ...prevReview,
//       [id]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const updateReview = () => {
//     fetch(`${API}/writers/${id}/shorts/${id}/reviews/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(review),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then(() => {
//         navigate(`/shorts/${id}/reviews/`);
//         toggleView(); // Toggle view after update
//       })
//       .catch((error) => console.error("catch", error));
//   };

//   const handleSubmitForm = (event) => {
//     event.preventDefault();
//     updateReview();
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Paper sx={{ padding: 3 }}>
//         <Typography variant="h5" gutterBottom>
//           Edit Review
//         </Typography>
//         <form onSubmit={handleSubmitForm}>
//           <Box mb={2}>
//             <TextField
//               id="reviewer"
//               label="Reviewer"
//               value={review.reviewer || ""}
//               onChange={handleTextChange}
//               fullWidth
//               required
//             />
//           </Box>
//           <Box mb={2}>
//             <TextField
//               id="title"
//               label="Title"
//               value={review.title || ""}
//               onChange={handleTextChange}
//               fullWidth
//               required
//             />
//           </Box>
//           <Box mb={2}>
//             <TextField
//               id="content"
//               label="Content"
//               value={review.content || ""}
//               onChange={handleTextChange}
//               fullWidth
//               multiline
//               rows={4}
//             />
//           </Box>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 id="is_liked"
//                 checked={review.is_liked || false}
//                 onChange={handleTextChange}
//               />
//             }
//             label="Liked"
//           />
//           <Box mt={2}>
//             <Button type="submit" variant="contained" color="primary">
//               Save Changes
//             </Button>
//             <Button
//               type="button"
//               variant="outlined"
//               color="secondary"
//               sx={{ ml: 2 }}
//               onClick={toggleView}
//             >
//               Cancel
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// }

// export default ReviewEditForm;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

function ReviewEditForm({ reviewDetails, toggleView }) {
  const navigate = useNavigate();

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    is_liked: false,
  });

  // Extract id from reviewDetails
  const { id } = reviewDetails || {};

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails); // Set review details when the component mounts
    }
  }, [reviewDetails]);

  const handleTextChange = (event) => {
    const { id, value, type, checked } = event.target;
    setReview((prevReview) => ({
      ...prevReview,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const updateReview = () => {
    if (!id) return; // Ensure id is defined

    fetch(`${API}/writers/${id}/shorts/${id}/reviews/${id}`, {
      method: "PUT",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        navigate(`/shorts/${id}/reviews/`);
        toggleView(); // Toggle view after update
      })
      .catch((error) => console.error("catch", error));
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    updateReview();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Edit Review
        </Typography>
        <form onSubmit={handleSubmitForm}>
          <Box mb={2}>
            <TextField
              id="reviewer"
              label="Reviewer"
              value={review.reviewer || ""}
              onChange={handleTextChange}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              id="title"
              label="Title"
              value={review.title || ""}
              onChange={handleTextChange}
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              id="content"
              label="Content"
              value={review.content || ""}
              onChange={handleTextChange}
              fullWidth
              multiline
              rows={4}
            />
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                id="is_liked"
                checked={review.is_liked || false}
                onChange={handleTextChange}
              />
            }
            label="Liked"
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Save Changes
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              sx={{ ml: 2 }}
              onClick={toggleView}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default ReviewEditForm;
