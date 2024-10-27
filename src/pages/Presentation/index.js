// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import heroImage from "../../assets/imagesWeb/images/mainSection/HeroImage.jpg";
// import heroImage from "../../assets/imagesWeb/images/mainSection/heroImage2.jpg";
// Material Kit 2 React components
import MKBox from "../../components/MKBox/MKBoxRoot";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import Divider from "@mui/material/Divider";
// import { Link } from "react-router-dom";
// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
// import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";

// Images
import ServicesComponent from "components/OurServices/services";
import WhoWeAreComponent from "components/WhoWeAre/whoWeAre";
// import Download from "pages/Presentation/sections/Download";

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import footerRoutes from "footer.routes";

// Images
import card1 from "../../assets/imagesWeb/images/cardImages/card1.webp";
import card2 from "../../assets/imagesWeb/images/cardImages/card2.webp";
import card3 from "../../assets/imagesWeb/images/cardImages/card3.jpg";
import card4 from "../../assets/imagesWeb/images/cardImages/card4.jpg";
import card5 from "../../assets/imagesWeb/images/cardImages/card5.jpg";
import card6 from "../../assets/imagesWeb/images/cardImages/card6.jpg";
import SliderSection from "./sections/SliderSection";
// import CardImage from "./sections/CardImage";
function Presentation() {
  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        id="home"
        sx={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Kheetii Bazaar{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Our platform is a game-changer for You. With direct access to a vast market, farmers
              can now sell their produce at better prices, substantially increasing their profits.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Container sx={{ width: "100%" }} id="gallery">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card className="card-container">
                <CardMedia component="img" image={card1} alt="card" className="cardImage" />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card className="card-container">
                <CardMedia component="img" image={card2} alt="card" className="cardImage" />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card className="card-container">
                <CardMedia component="img" image={card3} alt="card" className="cardImage" />
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Container sx={{ width: "100%" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card className="card-container">
                <CardMedia component="img" image={card4} alt="card" className="cardImage" />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card className="card-container">
                <CardMedia component="img" image={card5} alt="card" className="cardImage" />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card className="card-container">
                <CardMedia component="img" image={card6} alt="card" className="cardImage" />
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Divider sx={{ my: 6 }} />

        <Container id="services">
          <ServicesComponent />
        </Container>
        <Divider sx={{ my: 6 }} />

        <Container sx={{ width: "100%" }} id="about">
          <WhoWeAreComponent />
        </Container>
        <Divider sx={{ my: 6 }} />

        <Container>
          <SliderSection />
        </Container>
        {/* <Download /> */}
        <MKBox pt={12} pb={6}>
          <Container className="image-container">
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/kheetiiBazaar"
                  target="_blank"
                  color="twitter"
                  sx={{ marginRight: 1 }} // Corrected the property name
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/profile.php?id=61555872177672&mibextid=ZbWKwL"
                  target="_blank"
                  color="facebook"
                  sx={{ marginRight: 1 }} // Corrected the property name
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Facebook
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.instagram.com/kheetiibazaar?igsh=c3FucW1vYmdycm1q"
                  target="_blank"
                  color="pinterest"
                  sx={{ marginRight: 1 }}
                >
                  <i className="fab fa-instagram" />
                  &nbsp;Instagram
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.linkedin.com/company/tspk-kheetii-bazaar31-services-private-limited/"
                  target="_blank"
                  color="linkedin"
                >
                  <i className="fab fa-linkedin" />
                  &nbsp;LinkedIn
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
