import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";

import news from "../../animation/45734-cinema-news-animation.json";
import time from "../../animation/45733-movie-time-animation.json";
import cinema from "../../animation/45732-cinema-animation.json";

import { AnimationService } from "../animation/AnimationService";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import logosComp from "../../img/company.png";

const ServicesData = [
  {
    animation: news,
    title: "Siempre Actualizado",
    ref: "Últimas Noticias",
  },
  {
    animation: cinema,
    title: "Multiplataforma",
    ref: "Soporte para dispositivos",
  },
  {
    animation: time,
    title: "Organizado y Programable",
    ref: "¿Cómo programar películas?",
  },
];

const Services = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <img src={logosComp} alt="logos" />
      </Container>
      <div
        style={{
          width: "25%",
          height: "5px",
          backgroundColor: "#E7E7E7",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Servicios
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Todo lo que quieras saber sobre Streaming, películas, series,
          lanzamientos, estrenos y de más
        </Typography>
      </CustomBox>
      
      <GuidesBox>
        {ServicesData.map((serviceData, index) => (
          <GuideBox key={index}>
            <AnimationService animationJSON={serviceData.animation} />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#3B3c45",
                my: 1,
              }}
            >
              {serviceData.title}
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "14px", color: "#FEB500" }}
              >
                {serviceData.ref}
              </Typography>
              <ArrowRightAltIcon style={{ color: "#FEB500" }} />
            </Box>
          </GuideBox>
        ))}
      </GuidesBox>
    </Box>
  );
};

export default Services;
