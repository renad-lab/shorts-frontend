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
                id={short.id}
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
