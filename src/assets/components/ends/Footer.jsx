import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import behance from "../../animation/icon/7000-behance.json";
import linkedin from "../../animation/icon/74301-linkedin.json";
import github from "../../animation/icon/79259-github.json";

import { AnimationFooter } from "../animation/AnimationFooter";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Productos
            </Typography>

            <FooterLink>PQRS</FooterLink>
            <br />
            <FooterLink>Propiedades</FooterLink>
            <br />
            <FooterLink>Nuestro Equipo</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Recursos
            </Typography>

            <FooterLink>Peliculas</FooterLink>
            <br />
            <FooterLink>Series</FooterLink>
            <br />
            <FooterLink>Thrilers</FooterLink>
            <br />
            <FooterLink>Free Trial</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Compañía
            </Typography>

            <FooterLink>Terminos y Condiciones</FooterLink>
            <br />
            <FooterLink>Privacidad</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Créditos
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              Z4ND3RX Encuentrame en
            </Typography>

            <IconBox>
              <AnimationFooter
                ruta="https://www.linkedin.com/in/z4nd3rx"
                animationJSON={linkedin}
              />
              <AnimationFooter
                ruta="https://github.com/Z4ND3RX"
                animationJSON={github}
              />
              <AnimationFooter
                ruta="https://www.behance.net/Z4ND3RX"
                animationJSON={behance}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
