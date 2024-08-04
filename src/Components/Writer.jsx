import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Writer.css";

function Writer({ writer }) {
  return (
    <Card className="writer-card">
      <Link to={`/writers/${writer.id}`} style={{ textDecoration: "none" }}>
        <div className="writer-image-container">
          <CardMedia
            component="img"
            className="writer-image"
            image={writer.picture_url}
            alt={writer.name}
          />
        </div>
      </Link>
      <CardContent className="writer-content">
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
          className="writer-name"
        >
          {writer.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="writer-biography"
        >
          {writer.biography}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Writer;
