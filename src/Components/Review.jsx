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
//             {review.title} <span>{review.is_liked ? "👍" : "👎"}</span>
//           </h4>
//           <h5>{review.reviewer}</h5>
//           <p>{review.content}</p>
//           <p>
//             <small>
//               Created at: {new Date(review.created_at).toLocaleString()}
//               <br />
//               Updated at: {new Date(review.updated_at).toLocaleString()}
//             </small>
//           </p>
//         </div>
//       )}
//       <div className="review-actions">
//         <button onClick={toggleView}>
//           {viewEditForm ? "Cancel" : "Edit this review"}
//         </button>
//         <button onClick={() => handleDelete(review.id)}>Delete</button>
//       </div>
//     </div>
//   );
// }

// export default Review;

import { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  Divider,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, setEditForm] = useState(false);
  const toggleView = () => setEditForm((prev) => !prev);

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <Typography variant="h6" gutterBottom>
            {review.title} <span>{review.is_liked ? "👍" : "👎"}</span>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            {review.reviewer}
          </Typography>
          <Typography variant="body1" paragraph>
            {review.content}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Created at: {new Date(review.created_at).toLocaleString()}
            <br />
            Updated at: {new Date(review.updated_at).toLocaleString()}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box display="flex" justifyContent="flex-end" gap={1}>
            {viewEditForm ? (
              <Button variant="outlined" color="secondary" onClick={toggleView}>
                Cancel
              </Button>
            ) : (
              <Tooltip title="Edit this review">
                <IconButton color="primary" onClick={toggleView}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Delete this review">
              <IconButton color="error" onClick={() => handleDelete(review.id)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </>
      )}
    </Paper>
  );
}

export default Review;
