import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ShortForm({ shortDetails, handleSubmit, toggleView, children }) {
  let { id } = useParams(); // Assumes id is short.id

  const [short, setShort] = useState({
    name: "",
    url: "",
    category: "",
    description: "",
    is_favorite: false,
    writer_id: id, // Updated to writer_id
    picture_url: "", // Added for new schema
  });

  const handleTextChange = (event) => {
    setShort({ ...short, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setShort({ ...short, [event.target.id]: event.target.checked });
  };

  useEffect(() => {
    if (shortDetails) {
      setShort(shortDetails);
    }
  }, [id, shortDetails]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(short, id);
    if (shortDetails) {
      toggleView();
    }
    setShort({
      name: "",
      url: "",
      category: "",
      description: "",
      is_favorite: false,
      writer_id: id,
      picture_url: "",
    });
    console.log("Form submitted");
  };

  return (
    <div className="Edit">
      {children}
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={short.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of the short"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          value={short.url}
          onChange={handleTextChange}
          placeholder="URL of the short"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          value={short.category}
          onChange={handleTextChange}
          placeholder="Category of the short"
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={short.description}
          onChange={handleTextChange}
          placeholder="Description of the short"
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          checked={short.is_favorite}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="picture_url">Picture URL:</label>
        <input
          id="picture_url"
          type="text"
          value={short.picture_url}
          onChange={handleTextChange}
          placeholder="URL of the picture"
        />

        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ShortForm;
