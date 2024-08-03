// import { Link } from "react-router-dom";

// export default function NavBar() {
//   return (
//     <nav>
//       <h1>
//         <Link to="/authors">Authors</Link>
//       </h1>
//       <button>
//         <Link to="/authors/new">New Author</Link>
//       </button>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/writers">Writers</Link>
      </h1>
      <button>
        <Link to="/writers/new">New Writer</Link>
      </button>
    </nav>
  );
}
