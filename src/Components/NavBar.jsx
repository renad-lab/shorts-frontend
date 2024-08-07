import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        height: 350,
        backgroundImage: 'url("/banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar
        sx={{
          height: "60%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: 2,
        }}
      ></Toolbar>
      <Toolbar
        sx={{
          height: "40%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#51423E",
              fontSize: "1.25rem",
              letterSpacing: "0.05rem",
              paddingBottom: "0px",
              display: "inline-block",
            }}
          >
            <Link
              to="/writers"
              style={{
                color: "#51423E",
                textDecoration: "none",
              }}
            >
              Writers
            </Link>
          </Typography>
          <Button
            color="inherit"
            sx={{
              textTransform: "none",
              fontSize: "1.25rem",
              letterSpacing: "0.05rem",
              padding: 0,
            }}
          >
            <Link
              to="/writers/new"
              style={{
                color: "#51423E",
                textDecoration: "none",
              }}
            >
              Add Writer
            </Link>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            component={Link}
            to="/shop"
            sx={{
              fontSize: "2rem",
              color: "#51423E",
            }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Button
            color="inherit"
            sx={{
              textTransform: "none",
              fontSize: "1.25rem",
              letterSpacing: "0.05rem",
              padding: 0,
            }}
          >
            <Link
              to="/login"
              style={{
                color: "#51423E",
                textDecoration: "none",
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
