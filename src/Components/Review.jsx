// import { useState } from "react";
// import {
//   Typography,
//   Button,
//   Divider,
//   IconButton,
//   Tooltip,
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ReviewForm from "./ReviewForm";

// function Review({ review, handleDelete, handleSubmit }) {
//   const [viewEditForm, setEditForm] = useState(false);
//   const toggleView = () => setEditForm((prev) => !prev);

//   return (
//     <>
//       {viewEditForm ? (
//         <ReviewForm
//           reviewDetails={review}
//           toggleView={toggleView}
//           handleSubmit={handleSubmit}
//         />
//       ) : (
//         <>
//           <Typography variant="h6" gutterBottom>
//             {review.title} <span>{review.is_liked ? "👍" : "👎"}</span>
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary" gutterBottom>
//             {review.reviewer}
//           </Typography>
//           <Typography variant="body1" paragraph>
//             {review.content}
//           </Typography>
//           <Typography variant="caption" color="textSecondary">
//             Created at: {new Date(review.created_at).toLocaleString()}
//             <br />
//             Updated at: {new Date(review.updated_at).toLocaleString()}
//           </Typography>
//           <Divider sx={{ my: 2 }} />
//           <div
//             style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
//           >
//             {viewEditForm ? (
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#000000",
//                   color: "#ffffff",
//                   "&:hover": {
//                     backgroundColor: "#ffffff",
//                     color: "#000000",
//                   },
//                 }}
//                 onClick={toggleView}
//               >
//                 Cancel
//               </Button>
//             ) : (
//               <Tooltip title="Edit this review">
//                 <IconButton
//                   sx={{
//                     color: "#000000",
//                     "&:hover": {
//                       color: "#ffffff",
//                       backgroundColor: "#000000",
//                     },
//                   }}
//                   onClick={toggleView}
//                 >
//                   <EditIcon />
//                 </IconButton>
//               </Tooltip>
//             )}
//             <Tooltip title="Delete this review">
//               <IconButton
//                 sx={{
//                   color: "#000000",
//                   "&:hover": {
//                     color: "#ffffff",
//                     backgroundColor: "#000000",
//                   },
//                 }}
//                 onClick={() => handleDelete(review.id)}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </Tooltip>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// export default Review;

import { useState } from "react";
import {
  Typography,
  Button,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReviewEditForm from "./ReviewEditForm";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, setEditForm] = useState(false);
  const toggleView = () => setEditForm((prev) => !prev);

  return (
    <>
      {viewEditForm ? (
        <ReviewEditForm
          reviewDetails={review} // Pass review details
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
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
          >
            {viewEditForm ? (
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
                onClick={toggleView}
              >
                Cancel
              </Button>
            ) : (
              <Tooltip title="Edit this review">
                <IconButton
                  sx={{
                    color: "#000000",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "#000000",
                    },
                  }}
                  onClick={toggleView}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Delete this review">
              <IconButton
                sx={{
                  color: "#000000",
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: "#000000",
                  },
                }}
                onClick={() => handleDelete(review.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </>
      )}
    </>
  );
}

export default Review;
