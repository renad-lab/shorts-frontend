// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Typography,
//   Button,
//   Box,
//   Container,
//   Divider,
//   CircularProgress,
// } from "@mui/material";
// import Review from "./Review";
// import ReviewForm from "./ReviewForm";

// const API = import.meta.env.VITE_BASE_URL;

// function Reviews() {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();

//   const handleAdd = (newReview) => {
//     fetch(`${API}/authors/${id}/shorts/${id}/reviews`, {
//       method: "POST",
//       body: JSON.stringify(newReview),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setReviews([res, ...reviews]);
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleDelete = (reviewId) => {
//     fetch(`${API}/authors/${id}/shorts/${id}/reviews/${reviewId}`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         setReviews(reviews.filter((review) => review.id !== reviewId)); // Remove deleted review
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleEdit = (updatedReview) => {
//     fetch(`${API}/authors/${id}/shorts/${id}/reviews/${updatedReview.id}`, {
//       method: "PUT",
//       body: JSON.stringify(updatedReview),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setReviews(
//           reviews.map((review) =>
//             review.id === updatedReview.id ? res : review
//           )
//         ); // Update review in the list
//       })
//       .catch((err) => console.error(err));
//   };

//   useEffect(() => {
//     fetch(`${API}/writers/${id}/shorts/${id}/reviews`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setReviews(data.reviews);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [id]);

//   return (
//     <Container maxWidth="md" sx={{ mt: 5 }}>
//       <Box mb={3}>
//         {/* <Typography variant="h4" gutterBottom>
//           Reviews
//         </Typography> */}
//         <ReviewForm handleSubmit={handleAdd} />
//       </Box>
//       {loading ? (
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           minHeight="200px"
//         >
//           <CircularProgress />
//         </Box>
//       ) : reviews.length > 0 ? (
//         reviews.map((review) => (
//           <Box key={review.id} mb={2}>
//             <Review
//               review={review}
//               handleDelete={() => handleDelete(review.id)}
//               handleSubmit={handleEdit}
//             />
//             <Divider sx={{ my: 2 }} />
//           </Box>
//         ))
//       ) : (
//         <Typography variant="body1" color="textSecondary">
//           No reviews available.
//         </Typography>
//       )}
//     </Container>
//   );
// }

// export default Reviews;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Typography,
//   Box,
//   Container,
//   Divider,
//   CircularProgress,
// } from "@mui/material";
// import Review from "./Review";

// const API = import.meta.env.VITE_BASE_URL;

// function Reviews() {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();

//   const handleDelete = (reviewId) => {
//     fetch(`${API}/authors/${id}/shorts/${id}/reviews/${reviewId}`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         setReviews(reviews.filter((review) => review.id !== reviewId)); // Remove deleted review
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleEdit = (updatedReview) => {
//     fetch(`${API}/authors/${id}/shorts/${id}/reviews/${updatedReview.id}`, {
//       method: "PUT",
//       body: JSON.stringify(updatedReview),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setReviews(
//           reviews.map((review) =>
//             review.id === updatedReview.id ? res : review
//           )
//         ); // Update review in the list
//       })
//       .catch((err) => console.error(err));
//   };

//   useEffect(() => {
//     fetch(`${API}/writers/${id}/shorts/${id}/reviews`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setReviews(data.reviews);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [id]);

//   return (
//     <Container maxWidth="md" sx={{ mt: 5 }}>
//       {loading ? (
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           minHeight="200px"
//         >
//           <CircularProgress />
//         </Box>
//       ) : reviews.length > 0 ? (
//         reviews.map((review) => (
//           <Box key={review.id} mb={2}>
//             <Review
//               review={review}
//               handleDelete={() => handleDelete(review.id)}
//               handleSubmit={handleEdit}
//             />
//             <Divider sx={{ my: 2 }} />
//           </Box>
//         ))
//       ) : (
//         <Typography variant="body1" color="textSecondary">
//           No reviews available.
//         </Typography>
//       )}
//     </Container>
//   );
// }

// export default Reviews;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Divider,
  CircularProgress,
  Alert,
  Grid,
  Paper,
} from "@mui/material";
import Review from "./Review";

const API = import.meta.env.VITE_BASE_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const handleDelete = (reviewId) => {
    fetch(`${API}/authors/${id}/shorts/${id}/reviews/${reviewId}`, {
      method: "DELETE",
    })
      .then(() => {
        setReviews((prevReviews) =>
          prevReviews.filter((review) => review.id !== reviewId)
        );
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to delete review");
      });
  };

  const handleEdit = (updatedReview) => {
    fetch(`${API}/authors/${id}/shorts/${id}/reviews/${updatedReview.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedReview),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setReviews((prevReviews) =>
          prevReviews.map((review) =>
            review.id === updatedReview.id ? res : review
          )
        );
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to update review");
      });
  };

  useEffect(() => {
    fetch(`${API}/writers/${id}/shorts/${id}/reviews`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load reviews");
        setLoading(false);
      });
  }, [id]);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="200px"
        >
          <CircularProgress />
        </Box>
      ) : reviews.length > 0 ? (
        <Grid container spacing={3}>
          {reviews.map((review) => (
            <Grid item xs={12} key={review.id}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Review
                  review={review}
                  handleDelete={() => handleDelete(review.id)}
                  handleSubmit={handleEdit}
                />
                <Divider sx={{ my: 2 }} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" color="textSecondary">
          No reviews available.
        </Typography>
      )}
    </Container>
  );
}

export default Reviews;
