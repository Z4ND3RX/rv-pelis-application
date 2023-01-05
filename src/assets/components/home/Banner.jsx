import {Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useContext } from "react";
import PelisContext from "../../../context/PelisContext";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../style/BannerStyle";

export default function Banner({ movie }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { URL_IMAGE } = useContext(PelisContext);

  return (
    <BannerContainer >
      <BannerImage src={`${URL_IMAGE + movie.backdrop_path}`} />
      <BannerContent>
        <Typography variant="h8">{movie.release_date}</Typography>
        <BannerTitle variant="h2">
          {movie.original_title}
        </BannerTitle>

        <BannerDescription variant="subtitle">
          {movie.overview}
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}