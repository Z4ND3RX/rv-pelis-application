import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Container } from "@mui/system";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { LinkOffTwoTone } from "@mui/icons-material";
import AnimationIcon from "../animation/AnimationIcon";
import LogoutButton from "../buttons/LogoutButton";
import PelisContext from "../../../context/PelisContext";
import LoginButton from "../buttons/LoginButton";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const { isAuthenticated, isLoading } = useContext(PelisContext);
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Features", "Services", "Listed", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const NavLinkX = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#FE7F00",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    top: "0",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <AnimationIcon />
        </Box>

        <NavbarLinksBox>
          <NavLink to={"/Begin"} style={{ textDecoration: "none" }}>
            <NavLinkX variant="body2"> Inicio </NavLinkX>
          </NavLink>
          <NavLink to={"/Home"} style={{ textDecoration: "none" }}>
            <NavLinkX variant="body2"> Películas </NavLinkX>
          </NavLink>
          {isAuthenticated ? (
            <NavLink to={"/Profile"} style={{ textDecoration: "none" }}>
              <NavLinkX variant="body2"> Perfil </NavLinkX>
            </NavLink>
          ) : (
            <> </>
          )}
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {isAuthenticated ? (
          <LogoutButton />
        ) : (
          <LoginButton text="iniciar Sesión" variant="outlined" />
        )}
      </Box>
    </NavbarContainer>
  );
};

export default NavBar;
