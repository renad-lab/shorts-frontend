// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Short from "./Short";
// import ShortForm from "./ShortForm";

// const API = import.meta.env.VITE_BASE_URL;

// function Shorts() {
//   const [shorts, setShorts] = useState([]);
//   const { id } = useParams();

//   const handleAdd = (newShort) => {
//     fetch(`${API}/writers/${id}/shorts`, {
//       // Updated to writers
//       method: "POST",
//       body: JSON.stringify(newShort),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json()) // Parse into JavaScript
//       .then((res) => {
//         setShorts([res, ...shorts]); // Add new short to the list
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleDelete = (shortId) => {
//     fetch(`${API}/writers/${id}/shorts/${shortId}`, {
//       // Updated to writers
//       method: "DELETE",
//     })
//       .then(() => {
//         setShorts(shorts.filter((short) => short.id !== shortId)); // Remove deleted short
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleEdit = (updatedShort) => {
//     fetch(`${API}/writers/${id}/shorts/${updatedShort.id}`, {
//       // Updated to writers
//       method: "PUT",
//       body: JSON.stringify(updatedShort),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setShorts(
//           shorts.map((short) => (short.id === updatedShort.id ? res : short))
//         ); // Update short in the list
//       })
//       .catch((err) => console.error(err));
//   };

//   useEffect(() => {
//     fetch(`${API}/writers/${id}/shorts`) // Updated to writers
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setShorts(data);
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   return (
//     <section className="Shorts">
//       <h2>Shorts</h2>
//       <ShortForm handleSubmit={handleAdd}>Add a New Short</ShortForm>
//       {shorts.map((short) => (
//         <Short
//           key={short.id}
//           short={short}
//           handleDelete={() => handleDelete(short.id)}
//           handleSubmit={handleEdit}
//         />
//       ))}
//     </section>
//   );
// }

// export default Shorts;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Short from "./Short";
// import ShortForm from "./ShortForm";
// import {
//   Container,
//   Typography,
//   Paper,
//   Box,
//   Divider,
//   CircularProgress,
//   Alert,
// } from "@mui/material";

// const API = import.meta.env.VITE_BASE_URL;

// function Shorts() {
//   const [shorts, setShorts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`${API}/writers/${id}/shorts`)
//       .then((response) => response.json())
//       .then((data) => {
//         setShorts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Failed to load shorts");
//         setLoading(false);
//       });
//   }, [id]);

//   const handleAdd = (newShort) => {
//     fetch(`${API}/writers/${id}/shorts`, {
//       method: "POST",
//       body: JSON.stringify(newShort),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setShorts((prevShorts) => [res, ...prevShorts]);
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleDelete = (shortId) => {
//     fetch(`${API}/writers/${id}/shorts/${shortId}`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         setShorts((prevShorts) =>
//           prevShorts.filter((short) => short.id !== shortId)
//         );
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleEdit = (updatedShort) => {
//     fetch(`${API}/writers/${id}/shorts/${updatedShort.id}`, {
//       method: "PUT",
//       body: JSON.stringify(updatedShort),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setShorts((prevShorts) =>
//           prevShorts.map((short) =>
//             short.id === updatedShort.id ? res : short
//           )
//         );
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <Container maxWidth="md">
//       <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
//         {/* <Typography variant="h4" gutterBottom>
//           Shorts
//         </Typography> */}
//         {error && <Alert severity="error">{error}</Alert>}
//         {loading ? (
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             height="100px"
//           >
//             <CircularProgress />
//           </Box>
//         ) : (
//           <>
//             <ShortForm handleSubmit={handleAdd} />
//             <Divider sx={{ my: 3 }} />
//             {shorts.map((short) => (
//               <Short
//                 key={short.id}
//                 short={short}
//                 handleDelete={() => handleDelete(short.id)}
//                 handleSubmit={handleEdit}
//               />
//             ))}
//           </>
//         )}
//       </Paper>
//     </Container>
//   );
// }

// export default Shorts;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Short from "./Short";
// import {
//   Container,
//   Typography,
//   Box,
//   CircularProgress,
//   Alert,
// } from "@mui/material";

// const API = import.meta.env.VITE_BASE_URL;

// function Shorts() {
//   const [shorts, setShorts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { id } = useParams();

//  useEffect(() => {
//    fetch(`${API}/writers/${id}/shorts`)
//      .then((response) => response.json())
//      .then((data) => {
//        console.log("Fetched data:", data); // Log the data
//        if (Array.isArray(data)) {
//          setShorts(data);
//        } else {
//          throw new Error("Data is not an array");
//        }
//        setLoading(false);
//      })
//      .catch((err) => {
//        console.error(err);
//        setError("Failed to load shorts");
//        setLoading(false);
//      });
//  }, [id]);

//   const handleDelete = (shortId) => {
//     fetch(`${API}/writers/${id}/shorts/${shortId}`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         setShorts((prevShorts) =>
//           prevShorts.filter((short) => short.id !== shortId)
//         );
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleEdit = (updatedShort) => {
//     fetch(`${API}/writers/${id}/shorts/${updatedShort.id}`, {
//       method: "PUT",
//       body: JSON.stringify(updatedShort),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setShorts((prevShorts) =>
//           prevShorts.map((short) =>
//             short.id === updatedShort.id ? res : short
//           )
//         );
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <Container maxWidth="md" sx={{ mt: 5 }}>
//       {error && <Alert severity="error">{error}</Alert>}
//       {loading ? (
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           height="100px"
//         >
//           <CircularProgress />
//         </Box>
//       ) : (
//         shorts.map((short) => (
//           <Short
//             key={short.id}
//             short={short}
//             handleDelete={() => handleDelete(short.id)}
//             handleSubmit={handleEdit}
//           />
//         ))
//       )}
//     </Container>
//   );
// }

// export default Shorts;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Short from "./Short";
// import {
//   Container,
//   Typography,
//   Box,
//   CircularProgress,
//   Alert,
// } from "@mui/material";

// const API = import.meta.env.VITE_BASE_URL;

// function Shorts() {
//   const [shorts, setShorts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchShorts = async () => {
//       try {
//         const response = await fetch(`${API}/writers/${id}/shorts`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log("Fetched data:", data);
//         if (Array.isArray(data)) {
//           setShorts(data);
//         } else {
//           throw new Error("Data is not an array");
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load shorts");
//         setLoading(false);
//       }
//     };

//     fetchShorts();
//   }, [id]);

//   const handleDelete = async (shortId) => {
//     try {
//       await fetch(`${API}/writers/${id}/shorts/${shortId}`, {
//         method: "DELETE",
//       });
//       setShorts((prevShorts) =>
//         prevShorts.filter((short) => short.id !== shortId)
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleEdit = async (updatedShort) => {
//     try {
//       const response = await fetch(
//         `${API}/writers/${id}/shorts/${updatedShort.id}`,
//         {
//           method: "PUT",
//           body: JSON.stringify(updatedShort),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const res = await response.json();
//       setShorts((prevShorts) =>
//         prevShorts.map((short) => (short.id === updatedShort.id ? res : short))
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{ mt: 5 }}>
//       {error && <Alert severity="error">{error}</Alert>}
//       {loading ? (
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           height="100px"
//         >
//           <CircularProgress />
//         </Box>
//       ) : (
//         shorts.map((short) => (
//           <Short
//             key={short.id}
//             short={short}
//             handleDelete={() => handleDelete(short.id)}
//             handleSubmit={handleEdit}
//           />
//         ))
//       )}
//     </Container>
//   );
// }

// export default Shorts;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Short from "./Short";
import { Container, Box, CircularProgress, Typography } from "@mui/material";

const API = import.meta.env.VITE_BASE_URL;

function Shorts() {
  const [shorts, setShorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const response = await fetch(`${API}/writers/${id}/shorts`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setShorts(data);
        } else {
          throw new Error("Data is not an array");
        }
      } catch (err) {
        console.error(err);
        // You can handle errors here if needed, e.g., logging or a notification
      } finally {
        setLoading(false);
      }
    };

    fetchShorts();
  }, [id]);

  const handleDelete = async (shortId) => {
    try {
      await fetch(`${API}/writers/${id}/shorts/${shortId}`, {
        method: "DELETE",
      });
      setShorts((prevShorts) =>
        prevShorts.filter((short) => short.id !== shortId)
      );
    } catch (err) {
      console.error(err);
      // Handle delete errors if needed
    }
  };

  const handleEdit = async (updatedShort) => {
    try {
      const response = await fetch(
        `${API}/writers/${id}/shorts/${updatedShort.id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedShort),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      setShorts((prevShorts) =>
        prevShorts.map((short) => (short.id === updatedShort.id ? res : short))
      );
    } catch (err) {
      console.error(err);
      // Handle edit errors if needed
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
          {shorts.length > 0 ? (
            shorts.map((short) => (
              <Short
                key={short.id}
                short={short}
                handleDelete={() => handleDelete(short.id)}
                handleSubmit={handleEdit}
              />
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              No shorts available for this writer.
            </Typography>
          )}
        </Box>
      )}
    </Container>
  );
}

export default Shorts;
