import React, { useState, useEffect } from "react";
import ShortEditForm from "./ShortEditForm";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Link as MuiLink,
} from "@mui/material";

const API = import.meta.env.VITE_BASE_URL; // Make sure to set this environment variable

function Short({ id, reviews, handleDelete, handleUpdate }) {
  const [viewEditForm, setEditForm] = useState(false);
  const [viewReviewForm, setReviewForm] = useState(false);
  const [viewReviews, setViewReviews] = useState(false);
  const [short, setShort] = useState(null);

  useEffect(() => {
    // Fetch short data when the component mounts or the id changes
    const fetchShort = async () => {
      try {
        const response = await fetch(`${API}/writers/${id}/shorts/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setShort(data);
      } catch (error) {
        console.error("Error fetching short data:", error);
      }
    };

    fetchShort();
  }, [id]);

  const toggleViewEdit = () => {
    setEditForm(!viewEditForm);
  };

  const toggleViewReview = () => {
    setReviewForm(!viewReviewForm);
  };

  const toggleViewReviews = () => {
    setViewReviews(!viewReviews);
  };

  return (
    <Box>
      {short && (
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            marginBottom: 2,
            padding: 2,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            image={short.picture_url}
            alt={short.name}
            sx={{
              maxWidth: 200,
              height: "auto",
              borderRadius: 2,
              marginRight: 2,
              marginTop: 3,
              objectFit: "contain",
            }}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" component="div" gutterBottom>
              {short.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Read here:</strong>{" "}
              <MuiLink
                href={short.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {short.url}
              </MuiLink>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Category:</strong> {short.category}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Description:</strong> {short.description}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  },
                }}
                onClick={toggleViewEdit}
              >
                {viewEditForm ? "Cancel Edit" : "Edit this short"}
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  },
                }}
                onClick={() => handleDelete(short.id)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  },
                }}
                onClick={toggleViewReview}
              >
                {viewReviewForm ? "Cancel Review" : "Review this short"}
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  },
                }}
                onClick={toggleViewReviews}
              >
                {viewReviews ? "Hide Reviews" : "Show Reviews"}
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
      {viewEditForm && (
        <Box sx={{ marginTop: 2 }}>
          <ShortEditForm
            short={short} // Pass the current short data
            toggleView={toggleViewEdit}
            handleSubmit={handleUpdate} // Pass the update handler
          />
        </Box>
      )}
      {viewReviewForm && (
        <Box sx={{ marginTop: 2 }}>
          <ReviewForm
            shortId={short.id}
            toggleView={toggleViewReview}
            toggleEditView={setEditForm}
          />
        </Box>
      )}
      {viewReviews && (
        <Box sx={{ marginTop: 2 }}>
          <Reviews reviews={reviews} />
        </Box>
      )}
    </Box>
  );
}

export default Short;
