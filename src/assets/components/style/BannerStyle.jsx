import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  Width: "80%",
  Height: "100%",
  padding: "0px 0px",
  background: "#F3F0EC",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: "block",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  padding: "30px",
}));

export const BannerImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "700px",
  height:"400px"
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: 1.5,
  fontSize: "30px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));
