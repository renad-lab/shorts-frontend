// import React from "react";
// import { Link } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

// export default function NavBar() {
//   return (
//     <AppBar
//       position="static"
//       sx={{
//         height: 250,
//         backgroundImage:
//           'url("src/assets/Modern Desktop Writing Workshop Google Classroom Header .jpg")',
//         backgroundSize: "cover",
//         backgroundPosition: "top",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <Toolbar
//         sx={{
//           height: "100%",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           <Link
//             to="/writers"
//             style={{ color: "inherit", textDecoration: "none" }}
//           >
//             Writers
//           </Link>
//         </Typography>
//         <Button color="inherit">
//           <Link
//             to="/writers/new"
//             style={{ color: "inherit", textDecoration: "none" }}
//           >
//             New Writer
//           </Link>
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        height: 250,
        backgroundImage:
          'url("src/assets/Modern Desktop Writing Workshop Google Classroom Header .jpg")',
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Toolbar
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: 2, // Add some padding for better spacing
        }}
      >
        <Box sx={{ display: "flex", gap: 2, marginLeft: "18px" }}>
          <Typography variant="h6" component="div">
            <Link
              to="/writers"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Writers
            </Link>
          </Typography>
          <Button color="inherit">
            <Link
              to="/writers/new"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              New Writer
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
