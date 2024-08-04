import { useState } from "react";
import ShortForm from "./ShortForm";

function Short({ short, handleDelete, handleSubmit }) {
  const [viewEditForm, setEditForm] = useState(false);

  // Toggle the visibility of the edit form
  const toggleViewEdit = () => {
    setEditForm(!viewEditForm);
  };

  return (
    <div>
      {short && (
        <div
          className="Short"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <div className="short-image" style={{ marginRight: "20px" }}>
            <img
              src={short.picture_url}
              alt={short.name}
              style={{ maxWidth: "200px", height: "auto", borderRadius: "8px" }}
            />
          </div>
          <div className="short-details" style={{ flex: 1 }}>
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
              <strong>Writer ID:</strong> {short.writer_id}{" "}
              {/* Updated to writer_id */}
            </p>

            <div className="short-actions">
              <button onClick={toggleViewEdit}>
                {viewEditForm ? "Cancel Edit" : "Edit this short"}
              </button>
              <button onClick={() => handleDelete(short.id)}>Delete</button>
            </div>
          </div>
          {viewEditForm && (
            <ShortForm
              shortDetails={short}
              toggleView={toggleViewEdit}
              handleSubmit={handleSubmit}
              style={{ marginTop: "20px" }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Short;
