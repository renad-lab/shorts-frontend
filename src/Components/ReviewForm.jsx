import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm({ reviewDetails, handleSubmit, toggleView, children }) {
  let { id } = useParams(); // Assumes id is short.id

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    short_id: id, // Updated to use short_id
  });

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
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
      short_id: id, // Updated to use short_id
    });
    console.log("Form submitted");
  };

  return (
    <div className="Edit">
      {children}
      <form onSubmit={onSubmit}>
        <label htmlFor="reviewer">Name:</label>
        <input
          id="reviewer"
          value={review.reviewer}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={review.title}
          onChange={handleTextChange}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          name="rating"
          min="0"
          max="5"
          step="1"
          required
          placeholder="Please enter value between 0 and 5"
          value={review.rating}
          onChange={handleTextChange}
        />
        <label htmlFor="content">Review:</label>
        <textarea
          id="content"
          name="content"
          value={review.content}
          placeholder="What do you think..."
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default ReviewForm;
