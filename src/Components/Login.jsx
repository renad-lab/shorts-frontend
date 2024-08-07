import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  CircularProgress,
  IconButton,
  InputAdornment,
  Collapse,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { css, keyframes } from "@emotion/react";

import myIcon from "../assets/script.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const animatedContainer = css`
  animation: ${fadeIn} 0.5s ease-out;
`;

const iconAnimation = css`
  animation: ${rotate} 3s linear infinite;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAuthenticated(true);
      setTimeout(() => {
        navigate("/writers");
      }, 1000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "background.paper",
        }}
        css={animatedContainer}
      >
        <Box
          component="img"
          src={myIcon}
          alt="My Custom Icon"
          sx={{ width: 60, height: 60, mb: 2 }}
          css={iconAnimation}
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Collapse in={!!error}>
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        </Collapse>
        {loading && (
          <Box sx={{ mt: 2 }}>
            <CircularProgress />
          </Box>
        )}
        <Collapse in={authenticated && !loading}>
          <Typography color="primary" sx={{ mt: 2 }}>
            Authenticated with Firebase.
          </Typography>
        </Collapse>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          disabled={loading}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
