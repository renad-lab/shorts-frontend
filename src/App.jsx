// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

// NEW PAGES
import Login from "./Components/Login";
import Shop from "./Components/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/writers" element={<Index />} />
            <Route path="/writers/new" element={<New />} />
            <Route path="/writers/:id" element={<Show />} />
            <Route path="/writers/:id/edit" element={<Edit />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// // DEPENDENCIES
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebaseConfig";
// import "./App.css";

// // PAGES
// import Edit from "./Pages/Edit";
// import FourOFour from "./Pages/FourOFour";
// import Home from "./Pages/Home";
// import Index from "./Pages/Index";
// import New from "./Pages/New";
// import Show from "./Pages/Show";

// // COMPONENTS
// import NavBar from "./Components/NavBar";
// import Footer from "./Components/Footer";

// // NEW PAGES
// import Login from "./Components/Login";
// import Shop from "./Components/Shop";
// import SignUp from "./Components/SignUp";
// import PrivateRoute from "./Components/PrivateRoute";

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <div className="App">
//       <Router>
//         <NavBar />
//         <main>
//           <Routes>
//             <Route path="/" element={<PrivateRoute user={user}><Home /></PrivateRoute>} />
//             <Route path="/writers" element={<PrivateRoute user={user}><Index /></PrivateRoute>} />
//             <Route path="/writers/new" element={<PrivateRoute user={user}><New /></PrivateRoute>} />
//             <Route path="/writers/:id" element={<PrivateRoute user={user}><Show /></PrivateRoute>} />
//             <Route path="/writers/:id/edit" element={<PrivateRoute user={user}><Edit /></PrivateRoute>} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/shop" element={<PrivateRoute user={user}><Shop /></PrivateRoute>} />
//             <Route path="*" element={<FourOFour />} />
//           </Routes>
//         </main>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
