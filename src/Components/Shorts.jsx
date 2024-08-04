import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Short from "./Short";
import ShortForm from "./ShortForm";

const API = import.meta.env.VITE_BASE_URL;

function Shorts() {
  const [shorts, setShorts] = useState([]);
  const { id } = useParams();

  const handleAdd = (newShort) => {
    fetch(`${API}/writers/${id}/shorts`, {
      // Updated to writers
      method: "POST",
      body: JSON.stringify(newShort),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json()) // Parse into JavaScript
      .then((res) => {
        setShorts([res, ...shorts]); // Add new short to the list
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (shortId) => {
    fetch(`${API}/writers/${id}/shorts/${shortId}`, {
      // Updated to writers
      method: "DELETE",
    })
      .then(() => {
        setShorts(shorts.filter((short) => short.id !== shortId)); // Remove deleted short
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = (updatedShort) => {
    fetch(`${API}/writers/${id}/shorts/${updatedShort.id}`, {
      // Updated to writers
      method: "PUT",
      body: JSON.stringify(updatedShort),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setShorts(
          shorts.map((short) => (short.id === updatedShort.id ? res : short))
        ); // Update short in the list
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(`${API}/writers/${id}/shorts`) // Updated to writers
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShorts(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <section className="Shorts">
      <h2>Shorts</h2>
      <ShortForm handleSubmit={handleAdd}>Add a New Short</ShortForm>
      {shorts.map((short) => (
        <Short
          key={short.id}
          short={short}
          handleDelete={() => handleDelete(short.id)}
          handleSubmit={handleEdit}
        />
      ))}
    </section>
  );
}

export default Shorts;
