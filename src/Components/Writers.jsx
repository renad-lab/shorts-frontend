import { useState, useEffect } from "react";
import Writer from "./Writer";
import { Grid, Container, Typography, Box, Pagination } from "@mui/material";

const API = import.meta.env.VITE_BASE_URL;

function Writers() {
  const [writers, setWriters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of writers per page

  useEffect(() => {
    fetch(`${API}/writers`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setWriters(responseJSON);
      })
      .catch((error) => console.error(error));
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const paginatedWriters = writers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Writers Gallery
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Discover the amazing writers in our collection
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {paginatedWriters.map((writer) => (
          <Grid item key={writer.id} xs={12} sm={6} md={4}>
            <Writer writer={writer} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(writers.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              backgroundColor: "#000000", // Black background
              color: "#ffffff", // White text color
            },
            "& .Mui-selected": {
              backgroundColor: "#ffffff", // White background for selected page
              color: "#000000", // Black text color for selected page
            },
            "& .MuiPaginationItem-ellipsis": {
              color: "#ffffff", // White color for ellipsis
            },
          }}
        />
      </Box>
    </Container>
  );
}

export default Writers;
