import { Link } from "react-router-dom";

function Writer({ writer }) {
  return (
    <tr>
      <td>
        <a href={writer.url} target="_blank" rel="noreferrer">
          {writer.name}
        </a>
      </td>
      <td>{writer.biography}</td>
      <td>
        {writer.picture_url && (
          <img
            src={writer.picture_url}
            alt={writer.name}
            style={{ width: "50px", height: "auto" }}
          />
        )}
      </td>
      <td>{writer.is_active ? "Active" : "Inactive"}</td>
      <td>
        <Link to={`/writers/${writer.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Writer;
