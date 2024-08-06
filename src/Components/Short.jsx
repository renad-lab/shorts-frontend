// import React, { useState } from "react";
// import ShortForm from "./ShortForm";
// import ReviewForm from "./ReviewForm";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   Box,
//   Link as MuiLink,
// } from "@mui/material";

// function Short({ short, reviews, handleDelete, handleSubmit }) {
//   const [viewEditForm, setEditForm] = useState(false);
//   const [viewReviewForm, setReviewForm] = useState(false);

//   // Toggle the visibility of the edit form
//   const toggleViewEdit = () => {
//     setEditForm(!viewEditForm);
//   };

//   // Toggle the visibility of the review form
//   const toggleViewReview = () => {
//     setReviewForm(!viewReviewForm);
//   };

//   return (
//     <Box>
//       {short && (
//         <Card
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "flex-start",
//             marginBottom: 2,
//             padding: 2,
//             borderRadius: 2,
//             boxShadow: 3,
//           }}
//         >
//           <CardMedia
//             component="img"
//             image={short.picture_url}
//             alt={short.name}
//             sx={{
//               maxWidth: 200,
//               height: "auto",
//               borderRadius: 2,
//               marginRight: 2,
//               marginTop: 3,
//               objectFit: "contain",
//             }}
//           />
//           <CardContent sx={{ flex: 1 }}>
//             <Typography variant="h6" component="div" gutterBottom>
//               {short.name}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               <strong>Read here:</strong>{" "}
//               <MuiLink
//                 href={short.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {short.url}
//               </MuiLink>
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               <strong>Category:</strong> {short.category}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               <strong>Description:</strong> {short.description}
//             </Typography>
//             <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 onClick={toggleViewEdit}
//               >
//                 {viewEditForm ? "Cancel Edit" : "Edit this short"}
//               </Button>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={() => handleDelete(short.id)}
//               >
//                 Delete
//               </Button>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={toggleViewReview}
//               >
//                 {viewReviewForm ? "Cancel Review" : "Review this short"}
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       )}
//       {viewEditForm && (
//         <Box sx={{ marginTop: 2 }}>
//           <ShortForm
//             shortDetails={short}
//             toggleView={toggleViewEdit}
//             handleSubmit={handleSubmit}
//           />
//         </Box>
//       )}
//       {viewReviewForm && (
//         <Box sx={{ marginTop: 2 }}>
//           <ReviewForm shortId={short.id} toggleView={toggleViewReview} />
//         </Box>
//       )}
//       {reviews && reviews.length > 0 && (
//         <Box sx={{ marginTop: 2 }}>
//           <Typography variant="h6" gutterBottom>
//             Reviews
//           </Typography>
//           {reviews.map((review) => (
//             <Card
//               key={review.id}
//               sx={{
//                 marginBottom: 1,
//                 padding: 2,
//                 borderRadius: 2,
//                 boxShadow: 1,
//               }}
//             >
//               <CardContent>
//                 <Typography variant="body1" gutterBottom>
//                   <strong>{review.reviewerName}</strong> - {review.date}
//                 </Typography>
//                 <Typography variant="body2">{review.content}</Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>
//       )}
//     </Box>
//   );
// }

// export default Short;

import React, { useState } from "react";
import ShortForm from "./ShortForm";
import ReviewForm from "./ReviewForm";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Link as MuiLink,
} from "@mui/material";

function Short({ short, reviews, handleDelete, handleSubmit }) {
  const [viewEditForm, setEditForm] = useState(false);
  const [viewReviewForm, setReviewForm] = useState(false);

  // Toggle the visibility of the edit form
  const toggleViewEdit = () => {
    setEditForm(!viewEditForm);
  };

  // Toggle the visibility of the review form
  const toggleViewReview = () => {
    setReviewForm(!viewReviewForm);
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
            <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
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
            </Box>
          </CardContent>
        </Card>
      )}
      {viewEditForm && (
        <Box sx={{ marginTop: 2 }}>
          <ShortForm
            shortDetails={short}
            toggleView={toggleViewEdit}
            handleSubmit={handleSubmit}
          />
        </Box>
      )}
      {viewReviewForm && (
        <Box sx={{ marginTop: 2 }}>
          <ReviewForm shortId={short.id} toggleView={toggleViewReview} />
        </Box>
      )}
      {reviews && reviews.length > 0 && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6" gutterBottom>
            Reviews
          </Typography>
          {reviews.map((review) => (
            <Card
              key={review.id}
              sx={{
                marginBottom: 1,
                padding: 2,
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  <strong>{review.reviewerName}</strong> - {review.date}
                </Typography>
                <Typography variant="body2">{review.content}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Short;
