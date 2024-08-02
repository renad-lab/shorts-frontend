import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews";
import Shorts from "./Shorts";
const API = import.meta.env.VITE_BASE_URL;

function AuthorDetails() {
  const [author, setAuthor] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/authors/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => setAuthor(responseJSON))
      .catch((error) => console.error(error));
  }, [id, API]);

  useEffect(() => {
    console.log(author);
  }, [author]);

  const handleDelete = () => {
    deleteAuthor();
  };

  const deleteAuthor = () => {
    fetch(`${API}/authors/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/authors`))
      .catch((error) => console.error(error));
  };

  return (
    <article>
      <h3>{author.name}</h3>
      <p>{author.biography}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/authors`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/authors/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <Shorts authorId={id} />
      <Reviews authorId={id} />
    </article>
  );
}

export default AuthorDetails;
