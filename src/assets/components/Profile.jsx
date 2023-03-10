import { Box, Container, styled, Typography } from "@mui/material";
import { useContext } from "react";
import "react-json-pretty/themes/monikai.css";
import PelisContext from "../../context/PelisContext";
import NavBar from "./ends/NavBar";

import PerfilUsuario from "./profile/PerfilUsuario";
import Header from "./profile/Header";
import Portada from "./profile/Portada";
import Avatar from "./profile/Avatar";
import Biografia from "./profile/Biografia";
import FooterProfile from "./profile/FooterProfile";
import ListaDatos from "./profile/ListaDatos";
import IconoStyle from "./profile/IconoStyle";

import {
  AlternateEmail,
  Call,
  Place,
  CalendarMonth,
  Person,
} from "@mui/icons-material";

import Footer from "./ends/Footer";

const Body = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Profile = () => {
  const { isAuthenticated, user } = useContext(PelisContext);
  return (
    isAuthenticated && (
      <>
        <NavBar />
        <PerfilUsuario>
          <Header>
            <Portada>
              <Avatar>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    position: "relative",
                    borderRadius: "50%",
                  }}
                  alt={user.picture}
                  src={user.picture}
                />
              </Avatar>
            </Portada>
          </Header>
          <Body>
            <Biografia>
              <h1>{user.name}</h1>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              >
                A continuación se reflejará la información actual acerca de su
                cuenta y la subscripción presente
              </Typography>
            </Biografia>
            <FooterProfile>
              <ListaDatos>
                <li>
                  <IconoStyle>
                    <AlternateEmail /> {user.email}
                  </IconoStyle>
                </li>
                <li>
                  <IconoStyle>
                    <Call /> 0000000000
                  </IconoStyle>
                </li>
                <li>
                  <IconoStyle>
                    <CalendarMonth /> Inicio: 10/10/2022
                  </IconoStyle>
                </li>
              </ListaDatos>
              <ListaDatos>
                <li>
                  <IconoStyle>
                    <Person /> {user.nickname}
                  </IconoStyle>
                </li>
                <li>
                  <IconoStyle>
                    <Place /> Colombia
                  </IconoStyle>
                </li>
                <li>
                  <IconoStyle>
                    <CalendarMonth /> Fin: 10/10/2023
                  </IconoStyle>
                </li>
              </ListaDatos>
            </FooterProfile>
          </Body>
        </PerfilUsuario>
        <Footer />
      </>
    )
  );
};

export default Profile;
