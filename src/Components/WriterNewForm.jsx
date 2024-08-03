// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const API = import.meta.env.VITE_BASE_URL;

// function AuthorNewForm() {
//   const navigate = useNavigate();
//   const [author, setAuthor] = useState({
//     name: "",
//     biography: "",
//   });

//   // Add a new author. Redirect to the index view.
//   const addAuthor = () => {
//     fetch(`${API}/authors`, {
//       method: "POST",
//       body: JSON.stringify(author),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(() => {
//         navigate(`/authors`);
//       })
//       .catch((error) => console.error("catch", error));
//   };

//   const handleTextChange = (event) => {
//     setAuthor({ ...author, [event.target.id]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addAuthor();
//   };

//   return (
//     <div className="New">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           id="name"
//           value={author.name}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Name of the Author"
//           required
//         />
//         <label htmlFor="biography">Biography:</label>
//         <textarea
//           id="biography"
//           value={author.biography}
//           onChange={handleTextChange}
//           placeholder="Write a short biography of the author"
//           required
//         />
//         <br />
//         <input type="submit" value="Add Author" />
//       </form>
//     </div>
//   );
// }

// export default AuthorNewForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function WriterNewForm() {
  const navigate = useNavigate();
  const [writer, setWriter] = useState({
    name: "",
    biography: "",
    picture_url: "",
    is_active: false,
  });

  // Add a new writer. Redirect to the index view.
  const addWriter = () => {
    fetch(`${API}/writers`, {
      method: "POST",
      body: JSON.stringify(writer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/writers`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    const { id, value, type, checked } = event.target;
    setWriter({
      ...writer,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addWriter();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={writer.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of the Writer"
          required
        />
        <label htmlFor="biography">Biography:</label>
        <textarea
          id="biography"
          value={writer.biography}
          onChange={handleTextChange}
          placeholder="Write a short biography of the writer"
          required
        />
        <label htmlFor="picture_url">Picture URL:</label>
        <input
          id="picture_url"
          value={writer.picture_url}
          type="text"
          onChange={handleTextChange}
          placeholder="URL of the writer's picture"
        />
        <label htmlFor="is_active">
          <input
            id="is_active"
            type="checkbox"
            checked={writer.is_active}
            onChange={handleTextChange}
          />
          Active
        </label>
        <br />
        <input type="submit" value="Add Writer" />
      </form>
    </div>
  );
}

export default WriterNewForm;
