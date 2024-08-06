// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Box,
//   Typography,
// } from "@mui/material";

// const API = import.meta.env.VITE_BASE_URL;

// function WriterNewForm() {
//   const navigate = useNavigate();
//   const [writer, setWriter] = useState({
//     name: "",
//     biography: "",
//     picture_url: "",
//     is_active: false,
//   });

//   // Add a new writer. Redirect to the index view.
//   const addWriter = () => {
//     fetch(`${API}/writers`, {
//       method: "POST",
//       body: JSON.stringify(writer),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(() => {
//         navigate(`/writers`);
//       })
//       .catch((error) => console.error("catch", error));
//   };

//   const handleTextChange = (event) => {
//     const { id, value, type, checked } = event.target;
//     setWriter({
//       ...writer,
//       [id]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addWriter();
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         maxWidth: 400,
//         mx: "auto",
//         mt: 4,
//       }}
//     >
//       <TextField
//         id="name"
//         label="Name"
//         value={writer.name}
//         onChange={handleTextChange}
//         placeholder="Name of the Writer"
//         required
//         fullWidth
//       />
//       <TextField
//         id="biography"
//         label="Biography"
//         value={writer.biography}
//         onChange={handleTextChange}
//         placeholder="Write a short biography of the writer"
//         required
//         multiline
//         rows={4}
//         fullWidth
//       />
//       <TextField
//         id="picture_url"
//         label="Picture URL"
//         value={writer.picture_url}
//         onChange={handleTextChange}
//         placeholder="URL of the writer's picture"
//         fullWidth
//       />
//       {writer.picture_url && (
//         <Box
//           component="img"
//           src={writer.picture_url}
//           alt="Writer's Picture"
//           sx={{
//             width: "100%",
//             height: "auto",
//             maxHeight: 200,
//             objectFit: "contain",
//             borderRadius: 2,
//             mt: 2,
//           }}
//         />
//       )}
//       <FormControlLabel
//         control={
//           <Checkbox
//             id="is_active"
//             checked={writer.is_active}
//             onChange={handleTextChange}
//           />
//         }
//         label="Active"
//       />
//       <Button
//         type="submit"
//         variant="contained"
//         sx={{
//           backgroundColor: "#000000",
//           color: "#ffffff",
//           "&:hover": {
//             backgroundColor: "#ffffff",
//             color: "#000000",
//           },
//         }}
//       >
//         Add Writer
//       </Button>
//     </Box>
//   );
// }

// export default WriterNewForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";

const API = import.meta.env.VITE_BASE_URL;

function WriterNewForm() {
  const navigate = useNavigate();
  const [writer, setWriter] = useState({
    name: "",
    biography: "",
    picture_url: "",
    is_active: false,
  });

  // Add a new writer. Redirect to the index view.
  const addWriter = () => {
    fetch(`${API}/writers`, {
      method: "POST",
      body: JSON.stringify(writer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/writers`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    const { id, value, type, checked } = event.target;
    setWriter({
      ...writer,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addWriter();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        mx: "auto",
        mt: 4,
      }}
    >
      <TextField
        id="name"
        label="Name"
        value={writer.name}
        onChange={handleTextChange}
        placeholder="Name of the Writer"
        required
        fullWidth
      />
      <TextField
        id="biography"
        label="Biography"
        value={writer.biography}
        onChange={handleTextChange}
        placeholder="Write a short biography of the writer"
        required
        multiline
        rows={4}
        fullWidth
      />
      <TextField
        id="picture_url"
        label="Picture URL"
        value={writer.picture_url}
        onChange={handleTextChange}
        placeholder="URL of the writer's picture"
        fullWidth
      />
      {writer.picture_url && (
        <Box
          component="img"
          src={writer.picture_url}
          alt="Writer's Picture"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: 200,
            objectFit: "contain",
            borderRadius: 2,
            mt: 2,
          }}
        />
      )}
      <FormControlLabel
        control={
          <Checkbox
            id="is_active"
            checked={writer.is_active}
            onChange={handleTextChange}
          />
        }
        label="Active"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#000000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#000000",
          },
        }}
      >
        Add Writer
      </Button>
    </Box>
  );
}

export default WriterNewForm;
