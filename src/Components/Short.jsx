import { useState } from "react";
import ShortForm from "./ShortForm";

function Short({ short, handleDelete, handleSubmit }) {
  const [viewEditForm, setEditForm] = useState(false);

  const toggleView = () => {
    setEditForm(!viewEditForm);
  };

  return (
    <div className="Short">
      {viewEditForm ? (
        <ShortForm
          shortDetails={short}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <h4>{short.name}</h4>
          <p>
            <strong>URL:</strong>{" "}
            <a href={short.url} target="_blank" rel="noopener noreferrer">
              {short.url}
            </a>
          </p>
          <p>
            <strong>Category:</strong> {short.category}
          </p>
          <p>
            <strong>Description:</strong> {short.description}
          </p>
          <p>
            <strong>Favorite:</strong> {short.is_favorite ? "Yes" : "No"}
          </p>
          <p>
            <strong>Author ID:</strong> {short.author_id}
          </p>
        </div>
      )}
      <div className="short-actions">
        <button onClick={toggleView}>
          {viewEditForm ? "Cancel" : "Edit this short"}
        </button>
        <button onClick={() => handleDelete(short.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Short;
