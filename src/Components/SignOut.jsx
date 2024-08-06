// src/components/SignOut.js
import React from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { Button, Box } from "@mui/material";

function SignOut() {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleSignOut}>
        Sign Out
      </Button>
    </Box>
  );
}

export default SignOut;
