import { useState, useEffect } from "react";
import Writer from "./Writer";
import {
  Grid,
  Container,
  Typography,
  Box,
  Pagination,
  Divider,
} from "@mui/material";
import Slider from "react-slick";

const API = import.meta.env.VITE_BASE_URL;

function Writers() {
  const [writers, setWriters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Box mb={4}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Explore These Featured Essays!
        </Typography>
        <Slider {...carouselSettings}>
          <div>
            <a
              href="https://www.themarginalian.org/2019/12/26/katharina-kepler-witchcraft-dream/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dxeoesm7e/image/upload/v1722959242/Designer_81_sfm28p.png"
                alt="Essay 1"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.publicbooks.org/what-essays-are-and-what-essayists-do/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dxeoesm7e/image/upload/v1722959253/Designer_80_jakxrr.png"
                alt="Essay 2"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </a>
          </div>
          <div>
            <a
              href="https://longreads.com/2024/07/08/im-good-i-promise-the-loneliness-of-the-low-ranking-tennis-player/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dxeoesm7e/image/upload/v1722962573/Designer_82_s6xdnh.png"
                alt="Essay 3"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </a>
          </div>
        </Slider>
      </Box>
      <Divider sx={{ mb: 4 }} />
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
              backgroundColor: "#000000",
              color: "#ffffff",
            },
            "& .Mui-selected": {
              backgroundColor: "#ffffff",
              color: "#000000",
            },
            "& .MuiPaginationItem-ellipsis": {
              color: "#ffffff",
            },
          }}
        />
      </Box>
    </Container>
  );
}

export default Writers;
