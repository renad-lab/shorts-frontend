// import { useState, useEffect } from "react";
// import Author from "./Author";

// const API = import.meta.env.VITE_BASE_URL;

// console.log(API);
// function Authors() {
//   const [authors, setAuthors] = useState([]);

//   useEffect(() => {
//     fetch(`${API}/authors`)
//       .then((response) => response.json())
//       .then((responseJSON) => {
//         setAuthors(responseJSON);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className="Authors">
//       <section>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Biography</th>
//               <th>Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {authors.map((author) => {
//               return <Author key={author.id} author={author} />;
//             })}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// }

// export default Authors;

import { useState, useEffect } from "react";
import Writer from "./Writer"; // Updated import to Writer

const API = import.meta.env.VITE_BASE_URL;

console.log(API);
function Writers() {
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    fetch(`${API}/writers`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setWriters(responseJSON);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Writers">
      <section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Biography</th>
              <th>Picture</th>
              <th>Active</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {writers.map((writer) => {
              return <Writer key={writer.id} writer={writer} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Writers;
