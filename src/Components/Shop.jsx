import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";

function Shop() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Shop
      </Typography>
      <Grid container spacing={2}>
        {/* Example products */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 1 }}>
            <Typography variant="h6">Paper</Typography>
            <Typography variant="body1">$1.00</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 1 }}>
              Buy Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 1 }}>
            <Typography variant="h6">Pen</Typography>
            <Typography variant="body1">$1.00</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 1 }}>
              Buy Now
            </Button>
          </Box>
        </Grid>
        {/* Add more products as needed */}
      </Grid>
    </Box>
  );
}

export default Shop;
