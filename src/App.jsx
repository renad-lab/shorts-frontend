// // DEPENDENCIES
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <NavBar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/writers" element={<Index />} />
//             <Route path="/writers/new" element={<New />} />
//             <Route path="/writers/:id" element={<Show />} />
//             <Route path="/writers/:id/edit" element={<Edit />} />
//             <Route path="*" element={<FourOFour />} />
//           </Routes>
//         </main>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;


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
import Login from "./Components/Login"; // Import the new Login component
import Shop from "./Components/Shop";   // Import the new Shop component

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
            <Route path="/login" element={<Login />} />   {/* Add the Login route */}
            <Route path="/shop" element={<Shop />} />     {/* Add the Shop route */}
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
