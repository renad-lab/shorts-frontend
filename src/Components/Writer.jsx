import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Writer.css";

function Writer({ writer }) {
  return (
    <Card
      className="writer-card"
      sx={{
        maxWidth: 400,
        height: 420,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link
        to={`/writers/${writer.id}`}
        style={{ textDecoration: "none", flex: "1 0 auto" }}
      >
        {writer.picture_url && writer.picture_url.startsWith("https") ? (
          <CardMedia
            component="img"
            className="writer-image"
            image={writer.picture_url}
            alt={writer.name}
            sx={{
              maxHeight: 280,
              objectFit: "cover",
              borderRadius: 1,
              mb: 1,
            }}
          />
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            className="writer-image-placeholder"
            sx={{
              maxHeight: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: 1,
              mb: 0,
            }}
          >
            No Image Available
          </Typography>
        )}
      </Link>
      <CardContent sx={{ flex: "0 1 auto", overflow: "hidden", pt: 0 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            mb: 1, // Margin bottom for spacing between name and biography
          }}
        >
          {writer.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "center",
            maxHeight: 100,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {writer.biography}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Writer;
