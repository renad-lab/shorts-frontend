import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 5,
        py: 3,
        px: 2,
        backgroundColor: "#51423E ", // White background
        color: "#FFFAFA", // Black text color
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "0.75rem", color: "#FFFAFA" }}
            >
              Rediscovering the Joy of Long-Form Reading
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.75rem", color: "#FFFAFA" }}
            >
              Shorts was born from my struggle to reconnect with long-form
              reading in a world dominated by quick, bite-sized content. Like
              training for a marathon, Shorts helps you build endurance for
              deeper, more engaging reads, reclaiming the essence of a true
              SHORT to reignite your love for in-depth storytelling.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" justifyContent="flex-end" sx={{ mt: 1 }}>
              <Link
                href="https://facebook.com"
                color="inherit"
                target="_blank"
                rel="noopener"
                sx={{ color: "#FFFAFA", mx: 1 }} // Black color for Link, horizontal margin
              >
                <Facebook fontSize="small" sx={{ color: "#FFFAFA" }} />{" "}
                {/* Black color for icon */}
              </Link>
              <Link
                href="https://twitter.com"
                color="inherit"
                target="_blank"
                rel="noopener"
                sx={{ color: "#FFFAFA", mx: 1 }} // Black color for Link, horizontal margin
              >
                <Twitter fontSize="small" sx={{ color: "#FFFAFA" }} />{" "}
                {/* Black color for icon */}
              </Link>
              <Link
                href="https://instagram.com"
                color="inherit"
                target="_blank"
                rel="noopener"
                sx={{ color: "#FFFAFA", mx: 1 }} // Black color for Link, horizontal margin
              >
                <Instagram fontSize="small" sx={{ color: "#FFFAFA" }} />{" "}
                {/* Black color for icon */}
              </Link>
              <Link
                href="https://linkedin.com"
                color="inherit"
                target="_blank"
                rel="noopener"
                sx={{ color: "#FFFAFA", mx: 1 }} // Black color for Link, horizontal margin
              >
                <LinkedIn fontSize="small" sx={{ color: "#FFFAFA" }} />{" "}
                {/* Black color for icon */}
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={2}>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.75rem", color: "#FFFAFA" }}
          >
            &copy; {new Date().getFullYear()} Shorts App. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
