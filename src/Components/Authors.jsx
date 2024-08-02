import { useState, useEffect } from "react";
import Author from "./Author";

const API = import.meta.env.VITE_BASE_URL;

console.log(API);
function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch(`${API}/authors`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setAuthors(responseJSON);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Authors">
      <section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Biography</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => {
              return <Author key={author.id} author={author} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Authors;
