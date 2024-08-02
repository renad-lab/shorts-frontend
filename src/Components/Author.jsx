import { Link } from "react-router-dom";

function Author({ author }) {
  return (
    <tr>
      <td>
        <a href={author.url} target="_blank" rel="noreferrer">
          {author.name}
        </a>
      </td>
      <td>{author.biography}</td>
      <td>
        <Link to={`/authors/${author.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Author;
