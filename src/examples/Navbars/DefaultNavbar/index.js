import React from "react";
import { useState, useEffect } from "react";
// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
// import Popper from "@mui/material/Popper";
// import Grow from "@mui/material/Grow";
// import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";
// import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";
import ContactModal from "./modal";

import breakpoints from "assets/theme/base/breakpoints";
// modal

function DefaultNavbar({ brand, routes, transparent, light, action, sticky, relative, center }) {
  // const [dropdown, setDropdown] = useState("");
  // const [dropdownEl, setDropdownEl] = useState("");
  // const [dropdownName, setDropdownName] = useState("");
  // const [nestedDropdown, setNestedDropdown] = useState("");
  // const [nestedDropdownEl, setNestedDropdownEl] = useState("");
  // const [nestedDropdownName, setNestedDropdownName] = useState("");
  // const [arrowRef, setArrowRef] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const renderNavbarItems = routes.map(({ name, icon, href, route, collapse }) => (
    <DefaultNavbarDropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={route}
      collapse={Boolean(collapse)}
      // onMouseEnter={({ currentTarget }) => {
      //   if (collapse) {
      //     setDropdown(currentTarget);
      //     setDropdownEl(currentTarget);
      //     setDropdownName(name);
      //   }
      // }}
      // onMouseLeave={() => collapse && setDropdown(null)}
      light={light}
    />
  ));

  return (
    <>
      <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
        <MKBox
          py={1}
          px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
          my={relative ? 0 : 2}
          mx={relative ? 0 : 3}
          width={relative ? "100%" : "calc(100% - 48px)"}
          borderRadius="xl"
          shadow={transparent ? "none" : "md"}
          color={light ? "white" : "dark"}
          position={relative ? "relative" : "absolute"}
          left={0}
          zIndex={3}
          sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
            backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
            backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
          })}
        >
          <MKBox display="flex" justifyContent="space-between" alignItems="center">
            <MKBox
              component={Link}
              to="/"
              lineHeight={1}
              py={transparent ? 1.5 : 0.75}
              pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
            >
              <MKTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
                {brand}
              </MKTypography>
            </MKBox>
            <MKBox
              color="inherit"
              display={{ xs: "none", lg: "flex" }}
              ml="auto"
              mr={center ? "auto" : 0}
            >
              {console.log("renderNavbarItems", renderNavbarItems === "Contact Us")}
              {renderNavbarItems}
            </MKBox>
            <MKBox
              display={{ xs: "none", lg: "flex" }}
              // ml="auto"
              mr={center ? "auto" : 0}
              style={{ color: "#344767", opacity: "0.6", fontSize: "1rem" }}
              onClick={handleOpen}
            >
              {console.log("renderNavbarItems", renderNavbarItems === "Contact Us")}
              Contact Us
            </MKBox>
            <MKBox ml={{ xs: "auto", lg: 0 }}>
              {action &&
                (action.type === "internal" ? (
                  <MKButton
                    component={Link}
                    to={action.route}
                    variant={
                      action.color === "white" || action.color === "default"
                        ? "contained"
                        : "gradient"
                    }
                    color={action.color ? action.color : "info"}
                    size="small"
                  >
                    {action.label}
                  </MKButton>
                ) : (
                  <MKButton
                    component="a"
                    href={action.route}
                    target="_blank"
                    rel="noreferrer"
                    variant={
                      action.color === "white" || action.color === "default"
                        ? "contained"
                        : "gradient"
                    }
                    color={action.color ? action.color : "info"}
                    size="small"
                  >
                    {action.label}
                  </MKButton>
                ))}
            </MKBox>
            <MKBox
              display={{ xs: "inline-block", lg: "none" }}
              lineHeight={0}
              py={1.5}
              pl={1.5}
              color={transparent ? "white" : "inherit"}
              sx={{ cursor: "pointer" }}
              onClick={openMobileNavbar}
            >
              <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
            </MKBox>
            <div>
              <ContactModal open={open} handleClose={handleClose} />
            </div>
          </MKBox>
          <MKBox
            bgColor={transparent ? "white" : "transparent"}
            shadow={transparent ? "lg" : "none"}
            borderRadius="xl"
            px={transparent ? 2 : 0}
          >
            {mobileView && <DefaultNavbarMobile routes={routes} open={mobileNavbar} />}
          </MKBox>
        </MKBox>
      </Container>
      {/* start modal */}
      <modalComponent open={open} />
    </>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  brand: " Kheetii Bazaar",
  transparent: false,
  light: false,
  action: false,
  sticky: false,
  relative: false,
  center: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.shape).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "default",
        "white",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  center: PropTypes.bool,
};

export default DefaultNavbar;
