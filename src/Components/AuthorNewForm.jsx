import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function AuthorNewForm() {
  const navigate = useNavigate();
  const [author, setAuthor] = useState({
    name: "",
    biography: "",
  });

  // Add a new author. Redirect to the index view.
  const addAuthor = () => {
    fetch(`${API}/authors`, {
      method: "POST",
      body: JSON.stringify(author),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/authors`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setAuthor({ ...author, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAuthor();
  };

  return (
    <div className="New">
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
          required
        />
        <br />
        <input type="submit" value="Add Author" />
      </form>
    </div>
  );
}

export default AuthorNewForm;
