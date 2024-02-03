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
  padding: "0 2%",
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
  margin: "0 8px",
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: "0.875rem",
  fontWeight: 400,
  lineHeight: 1.5,
  textTransform: "capitalize",
  letterSpacing: "-0.125px",
  textDecoration: "none",
  color: "#344767",
  "&:hover": {
    textDecoration: "none",
  },
  "&:not(:last-of-type)": {
    marginRight: "2px",
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
  padding: theme.spacing(1),
  textAlign: "center",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  ".MuiDrawer-paper": {
    position: "absolute",
    top: "64px",
    left: 0,
    right: 0,
    width: "auto",
    borderRadius: "0 0 8px 8px",
    transition: theme.transitions.create("top", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "visible",
  },
}));

const DrawerListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  opacity: 0,
  transform: "translateY(-20px)",
  transition: theme.transitions.create(["opacity", "transform"], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  "&.enter": {
    opacity: 1,
    transform: "translateY(0)",
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
            <DesktopMenuItem component="a" href="">
              Home
            </DesktopMenuItem>
            <DesktopMenuItem component="a" href="">
              Gallery
            </DesktopMenuItem>
            <DesktopMenuItem component="a" href="">
              About
            </DesktopMenuItem>
            <DesktopMenuItem component="a" href="">
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
          <DrawerItem>
            <Typography>Home</Typography>
          </DrawerItem>
          <DrawerItem>
            <Typography>Gallery</Typography>
          </DrawerItem>
          <DrawerItem>
            <Typography>About</Typography>
          </DrawerItem>
          <DrawerItem>
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
