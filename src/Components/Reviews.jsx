// export default Reviews;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Divider,
  CircularProgress,
  Grid,
  Paper,
} from "@mui/material";
import Review from "./Review";

const API = import.meta.env.VITE_BASE_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `${API}/writers/${id}/shorts/${id}/reviews`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReviews(data.reviews || []);
      } catch (err) {
        console.error(err);
        // Handle errors if needed
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  const handleDelete = async (reviewId) => {
    try {
      await fetch(`${API}/writers/${id}/shorts/${id}/reviews/${reviewId}`, {
        method: "DELETE",
      });
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== reviewId)
      );
    } catch (err) {
      console.error(err);
      // Handle delete errors if needed
    }
  };

  const handleEdit = async (updatedReview) => {
    try {
      const response = await fetch(
        `${API}/writers/${id}/shorts/${id}/reviews/${updatedReview.id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedReview),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === updatedReview.id ? res : review
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="200px"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          {reviews.length > 0 ? (
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
              No reviews available for this short.
            </Typography>
          )}
        </Box>
      )}
    </Container>
  );
}

export default Reviews;
