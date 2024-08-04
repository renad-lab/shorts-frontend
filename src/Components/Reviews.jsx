import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = import.meta.env.VITE_BASE_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  const handleAdd = (newReview) => {
    fetch(`${API}/authors/${id}/shorts/${id}/reviews`, {
      method: "POST",
      body: JSON.stringify(newReview),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setReviews([res, ...reviews]);
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (reviewId) => {
    fetch(`${API}/authors/${id}/shorts/${id}/reviews/${reviewId}`, {
      method: "DELETE",
    })
      .then(() => {
        setReviews(reviews.filter((review) => review.id !== reviewId)); // Remove deleted review
      })
      .catch((err) => console.error(err));
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
        setReviews(
          reviews.map((review) =>
            review.id === updatedReview.id ? res : review
          )
        ); // Update review in the list
      })
      .catch((err) => console.error(err));
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
        console.log(data);
        setReviews(data.reviews);
      })
      .catch((err) => {
        console.error(err);
        // Optionally display a user-friendly message here
      });
  }, [id]);

  return (
    <section className="Reviews">
      <h2>Reviews</h2>
      <ReviewForm handleSubmit={handleAdd}>Add a New Review</ReviewForm>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
            handleDelete={() => handleDelete(review.id)}
            handleSubmit={handleEdit}
          />
        ))
      ) : (
        <p>No reviews available.</p> // Informative message when there are no reviews
      )}
    </section>
  );
}

export default Reviews;
