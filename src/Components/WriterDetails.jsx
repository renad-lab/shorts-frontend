import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Divider,
  Paper,
  Container,
} from "@mui/material";
import Reviews from "./Reviews";
import Shorts from "./Shorts";

const API = import.meta.env.VITE_BASE_URL;

function WriterDetails() {
  const [writer, setWriter] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/writers/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => setWriter(responseJSON))
      .catch((error) => console.error(error));
  }, [id]);

  const handleDelete = () => {
    deleteWriter();
  };

  const deleteWriter = () => {
    fetch(`${API}/writers/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/writers`))
      .catch((error) => console.error(error));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper
        elevation={3}
        sx={{ p: 3, display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Grid container spacing={2}>
          {writer.picture_url && (
            <Grid item xs={12} sm={4}>
              <CardMedia
                component="img"
                image={writer.picture_url}
                alt={writer.name}
                sx={{ width: "100%", height: "auto", borderRadius: 2 }}
              />
            </Grid>
          )}
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              {writer.name}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {writer.biography}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Status: {writer.is_active ? "Active" : "Inactive"}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/writers"
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to={`/writers/${id}/edit`}
                  >
                    Edit
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Box>
          {/* <Typography variant="h5" gutterBottom>
            Shorts
          </Typography> */}
          <Shorts writerId={id} />
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box>
          {/* <Typography variant="h5" gutterBottom>
            Reviews
          </Typography> */}
          <Reviews writerId={id} />
        </Box>
      </Paper>
    </Container>
  );
}

export default WriterDetails;
