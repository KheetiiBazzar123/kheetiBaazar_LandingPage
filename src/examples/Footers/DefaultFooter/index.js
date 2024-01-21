import React from "react";
import { Box, Link, Typography, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PropTypes from "prop-types";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../../../assets/imagesWeb/images/mainSection/logo.png";

function DefaultFooter({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
        borderTopLeftRadius: "2rem",
        borderTopRightRadius: "2rem",
        paddingBottom: "0.5rem",
        backgroundColor: "#FCFCFE",
        "& svg": {
          width: "1.2rem",
          height: "1.2rem",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#358FED",
          padding: "1rem",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={isMobile ? 2 : 10}>
            <Grid
              item
              xs={12}
              md={7}
              lg={7}
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: isMobile ? 0 : "2rem",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  maxWidth: "30%",
                  flexShrink: 0,
                  margin: isMobile ? "0 auto" : "unset",
                }}
              >
                <img src={logo} alt="Footer Logo" style={{ maxWidth: "100%", maxHeight: "100%" }} />
              </Box>

              <Typography
                variant="body1"
                color="#fff"
                sx={{
                  mt: isMobile ? 2 : 0,
                  textAlign: isMobile ? "center" : "left",
                  marginLeft: isMobile ? 0 : "2rem",
                }}
              >
                Transforming Agriculture with Tech. Bridging Farmers and Consumers Directly. Fresher
                Produce, Fairer Prices. Empowering Farmers, Delighting Consumers. Join Our Journey
                from Farm to Fork. Revolutionizing the Agri-Market, One Harvest at a Time.
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              lg={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
                marginTop: isMobile ? 2 : 0,
                paddingRight: isMobile ? 0 : "2rem",
              }}
            >
              <Typography
                variant="h6"
                color="white"
                gutterBottom
                sx={{ alignSelf: isMobile ? "center" : "flex-start" }}
              >
                <strong>CONTACTS</strong>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  color: "#fff",
                  mb: 1,
                }}
              >
                <LocationOnIcon sx={{ mr: 1, color: "inherit", marginTop: "0.5rem" }} />
                <Typography variant="body1">
                  Methopara(N), Milan Pally, PO- Ganganagar
                  <br />
                  Dist-North24 Parganas, Barasat-2, <br />
                  West Bengal, Kolkata- 700132.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#f2c426",
                  mb: 1,
                }}
              >
                <PhoneIcon sx={{ mr: 1, color: "inherit" }} />
                <Typography variant="body1">+91- 8149405617</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#f2c426",
                  mb: 1,
                }}
              >
                <EmailIcon sx={{ mr: 1, color: "inherit" }} />
                <Typography variant="body1">kheetiibazaar@gmail.com</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: { xs: "100%", md: "50%" },
          margin: { xs: "auto", md: "0 auto auto 0" },
          marginLeft: { xs: 0, md: "auto" },
          padding: { xs: "1rem", md: 0 },
        }}
      >
        <Typography
          variant="h6"
          color="white"
          gutterBottom
          sx={{ textAlign: { xs: "center", md: "left" }, mb: { xs: 2, md: 0 } }}
        >
          {content.copyright}
        </Typography>

        <Box
          display="flex"
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="center"
          color="#3791ED"
          sx={{
            gap: "1.2rem",
            fontSize: "1.2rem",
            mt: { xs: 2, md: 0 },
            flexWrap: "wrap", // Ensure that icons wrap on smaller screens
          }}
        >
          <Link
            href="https://twitter.com/kheetiiBazaar"
            target="_blank"
            sx={{ "&:hover": { color: "gray" } }}
          >
            <TwitterIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/company/tspk-kheetii-bazaar31-services-private-limited/"
            target="_blank"
            sx={{ "&:hover": { color: "gray" } }}
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61555872177672&mibextid=ZbWKwL"
            target="_blank"
            sx={{ "&:hover": { color: "gray" } }}
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.instagram.com/kheetiibazaar?igsh=c3FucW1vYmdycm1q"
            target="_blank"
            sx={{ "&:hover": { color: "gray" } }}
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://youtube.com/@kheetiiBazaar?si=-ZZMLbE-s89OhsPZ"
            target="_blank"
            sx={{ "&:hover": { color: "gray" } }}
          >
            <YouTubeIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

DefaultFooter.propTypes = {
  content: PropTypes.object.isRequired,
};

export default DefaultFooter;
