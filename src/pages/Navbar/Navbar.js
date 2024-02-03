import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ContactModal from "./modal";
import { useNavigate } from "react-router-dom";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  width: "67%",
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: 8,
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(10px)",
  marginTop: theme.spacing(2),
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  textAlign: "left",
});

const DesktopMenu = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "center",
  },
}));

const DesktopMenuItem = styled(Typography)({
  margin: "5px 8px",
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: "1rem",
  fontWeight: 500,
  lineHeight: 1.5,
  textTransform: "capitalize",
  letterSpacing: "-0.05px",
  textDecoration: "none",
  color: "#344767",
  "&:hover": {
    textDecoration: "none",
  },
  "&:not(:last-of-type)": {
    marginRight: "15px",
  },
  cursor: "pointer",
});

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const DrawerItem = styled("div")(({ theme }) => ({
  padding: theme.spacing(1.1),
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  textAlign: "left",
  fontSize: "0.875rem",
  marginLeft: "15px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  ".MuiDrawer-paper": {
    top: "68px",
    position: "fixed",
    left: 0,
    right: 0,
    width: "auto",
    borderRadius: 8,
    backgroundColor: "transparent",
    boxShadow: "none",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "0.875rem",
    overflow: "visible",
    transform: "translateY(-100%)",
    transition: theme.transitions.create("transform", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  "&.MuiDrawer-open .MuiDrawer-paper": {
    transform: "translateY(0)",
  },
}));

const DrawerListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(10px)",
  boxShadow: "none",
  borderRadius: "0 0 8px 8px",
  opacity: 0,
  transition: theme.transitions.create(["opacity", "transform"], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  width: "67%",
  "&.enter": {
    opacity: 1,
    transform: "translateX(24.7%)",
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    const section = document.querySelector(sectionId);
    const navbarHeight = 120;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }

    navigate(".", { replace: true });
  };

  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          {isMobile && (
            <MenuButton color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </MenuButton>
          )}
          <StyledTypography variant="h6" noWrap>
            Kheeti Bazaar
          </StyledTypography>
          <DesktopMenu>
            <DesktopMenuItem onClick={() => handleNavigation("#home")}>Home</DesktopMenuItem>
            <DesktopMenuItem onClick={() => handleNavigation("#gallery")}>Gallery</DesktopMenuItem>
            <DesktopMenuItem onClick={() => handleNavigation("#about")}>About</DesktopMenuItem>
            <DesktopMenuItem onClick={() => handleNavigation("#services")}>
              Services
            </DesktopMenuItem>
            <DesktopMenuItem component="a" onClick={handleOpen}>
              Contact Us
            </DesktopMenuItem>
          </DesktopMenu>
        </StyledToolbar>
      </StyledAppBar>
      <StyledDrawer
        variant="persistent"
        anchor="top"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
      >
        <DrawerListContainer className={mobileMenuOpen ? "enter" : ""}>
          <DrawerItem onClick={() => handleNavigation("#home")}>
            <Typography>Home</Typography>
          </DrawerItem>
          <DrawerItem onClick={() => handleNavigation("#gallery")}>
            <Typography>Gallery</Typography>
          </DrawerItem>
          <DrawerItem onClick={() => handleNavigation("#about")}>
            <Typography>About</Typography>
          </DrawerItem>
          <DrawerItem onClick={() => handleNavigation("#services")}>
            <Typography>Services</Typography>
          </DrawerItem>
          <DrawerItem>
            <Typography onClick={handleOpen}>Contact Us</Typography>
          </DrawerItem>
        </DrawerListContainer>
      </StyledDrawer>
      <div>
        <ContactModal open={open} handleClose={handleClose} />
      </div>
    </>
  );
};

export default Navbar;
