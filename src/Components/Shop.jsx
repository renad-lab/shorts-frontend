import React from "react";
import { Typography, Box, Button, Grid, Divider } from "@mui/material";

function Shop() {
  return (
    <Box sx={{ p: 2, textAlign: "center", mt: 3 }}>
      <Box mb={4}>
        <Typography variant="h4" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <a
              href="https://www.gentlemanstationer.com/blog/2018/7/7/the-best-pen-for-when-you-only-want-one-pen"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/5349ba13e4b095a3fb0ba65c/1530973152157-KWA0FKAKBLLE2AYP2LOC/Best-Single-Pen-Carry?format=2500w"
                alt="Product 1"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  minHeight: "300px",
                  borderRadius: "18px",
                  marginBottom: "16px",
                }}
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <a
              href="https://www.penguin.co.uk/articles/2020/11/yellow-legal-pad-writing-tips-obama"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <img
                src="https://wp.penguin.co.uk/wp-content/uploads/2020/11/Main-Yellow-Legal-Pad.jpg"
                alt="Product 2"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  minHeight: "300px",
                  borderRadius: "18px",
                  marginBottom: "16px",
                }}
              />
            </a>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ mb: 4 }} />
      {/* Product List Section */}
      <Typography variant="h4" gutterBottom>
        Welcome to the Shop
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {/* Example products */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 1 }}>
            <Typography variant="h6">Pen</Typography>
            <Typography variant="body1">$1.00</Typography>
            <Button
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor: "#E86754",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#FCBF03",
                },
              }}
            >
              Buy Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 1 }}>
            <Typography variant="h6">Paper</Typography>
            <Typography variant="body1">$1.00</Typography>
            <Button
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor: "#E86754",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#FCBF03",
                },
              }}
            >
              Buy Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Shop;
