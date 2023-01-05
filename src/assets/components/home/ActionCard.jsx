import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import hero_illustration from "../../img/hero_illustration.png";
import PelisContext from "../../../context/PelisContext";

export default function ActionCard({ movie }) {
  const { URL_IMAGE } = React.useContext(PelisContext);
  return (
    <Card sx={{ maxWidth: 345, margin: "1em" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="540"
          image={`${URL_IMAGE + movie.poster_path}`}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
