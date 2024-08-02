import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function AuthorEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [author, setAuthor] = useState({
    name: "",
    biography: "",
  });

  const handleTextChange = (event) => {
    setAuthor({ ...author, [event.target.id]: event.target.value });
  };

  // Update an author. Redirect to show view
  const updateAuthor = () => {
    fetch(`${API}/authors/${id}`, {
      method: "PUT",
      body: JSON.stringify(author),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => navigate(`/authors/${id}`))
      .catch((error) => console.error("catch", error));
  };

  // On page load, fill in the form with the author data.
  useEffect(() => {
    fetch(`${API}/authors/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setAuthor(responseJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAuthor();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={author.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of the Author"
          required
        />
        <label htmlFor="biography">Biography:</label>
        <textarea
          id="biography"
          value={author.biography}
          onChange={handleTextChange}
          placeholder="Write a short biography of the author"
        />
        <br />
        <input type="submit" value="Save Changes" />
      </form>
      <Link to={`/authors/${id}`}>
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default AuthorEditForm;
