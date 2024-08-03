// // Components/Review.jsx
// import { useState } from "react";
// import ReviewForm from "./ReviewForm";
// function Review({ review, handleDelete, handleSubmit }) {
//   const [viewEditForm, setEditForm] = useState(false);
//   const toggleView = () => {
//     setEditForm(!viewEditForm);
//   };
//   return (
//     <div className="Review">
//       {viewEditForm ? (
//         <ReviewForm
//           reviewDetails={review}
//           toggleView={toggleView}
//           handleSubmit={handleSubmit}
//         />
//       ) : (
//         <div>
//           <h4>
//             {review.title} <span>{review.rating}</span>
//           </h4>
//           <h5>{review.reviewer}</h5>
//           <p>{review.content}</p>
//         </div>
//       )}
//       <div className="review-actions">
//         <button onClick={toggleView}>
//           {viewEditForm ? "Cancel" : "Edit this review"}
//         </button>
//         <button onClick={() => handleDelete(review.id)}>delete</button>
//       </div>
//     </div>
//   );
// }

// export default Review;

import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, setEditForm] = useState(false);
  const toggleView = () => {
    setEditForm(!viewEditForm);
  };

  return (
    <div className="Review">
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <h4>
            {review.title} <span>{review.is_liked ? "👍" : "👎"}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
          <p>
            <small>
              Created at: {new Date(review.created_at).toLocaleString()}
              <br />
              Updated at: {new Date(review.updated_at).toLocaleString()}
            </small>
          </p>
        </div>
      )}
      <div className="review-actions">
        <button onClick={toggleView}>
          {viewEditForm ? "Cancel" : "Edit this review"}
        </button>
        <button onClick={() => handleDelete(review.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Review;
