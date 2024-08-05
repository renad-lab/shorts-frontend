import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import the ShoppingCart icon

export default function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        height: 300, // Set fixed height for the AppBar
        backgroundImage:
          'url("/src/assets/E33B0498-DB24-48AB-AAD6-4B2DE8A7B537_1_201_a.jpeg")',
        backgroundSize: "cover", // Ensures the image covers the AppBar
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column", // Stack items vertically
      }}
    >
      <Toolbar
        sx={{
          height: "60%", // Adjust height of the top portion
          display: "flex",
          justifyContent: "flex-end", // Align items to the right
          alignItems: "center", // Center items vertically
          paddingRight: 2,
        }}
      >
        {/* Remove the content from the top Toolbar */}
      </Toolbar>
      <Toolbar
        sx={{
          height: "40%", // Adjust height of the bottom portion
          display: "flex",
          justifyContent: "space-between", // Space out items evenly
          alignItems: "flex-end", // Align items vertically at the bottom
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Place items side by side
            gap: 2,
            alignItems: "center", // Align items vertically centered
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#51423E", // Matterhorn color for text
              fontSize: "1.25rem", // Larger font size for readability
              letterSpacing: "0.05rem", // Slight letter spacing for clarity
              paddingBottom: "0px", // Padding to separate text from border
              display: "inline-block", // Make border fit text size
            }}
          >
            <Link
              to="/writers"
              style={{
                color: "#51423E", // Matterhorn color for link
                textDecoration: "none", // Remove underline
              }}
            >
              Writers
            </Link>
          </Typography>
          <Button
            color="inherit"
            sx={{
              textTransform: "none", // Default text transformation
              fontSize: "1.25rem", // Larger font size for readability
              letterSpacing: "0.05rem", // Slight letter spacing for clarity
              padding: 0, // Remove default padding
            }}
          >
            <Link
              to="/writers/new"
              style={{
                color: "#51423E", // Matterhorn color for link
                textDecoration: "none", // Remove underline
              }}
            >
              Add Writer
            </Link>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Place items side by side
            gap: 2,
            alignItems: "center", // Align items vertically centered
          }}
        >
          <IconButton
            color="inherit"
            component={Link}
            to="/shop"
            sx={{
              fontSize: "2rem", // Adjust the size of the icon
              color: "#51423E", // Matterhorn color for icon
            }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Button
            color="inherit"
            sx={{
              textTransform: "none", // Default text transformation
              fontSize: "1.25rem", // Larger font size for readability
              letterSpacing: "0.05rem", // Slight letter spacing for clarity
              padding: 0, // Remove default padding
            }}
          >
            <Link
              to="/login"
              style={{
                color: "#51423E", // Matterhorn color for link
                textDecoration: "none", // Remove underline
              }}
            >
              Login
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
