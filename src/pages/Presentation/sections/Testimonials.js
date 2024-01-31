import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import card4 from "../../../assets/imagesWeb/images/cardImages/card4.jpg";
import card5 from "../../../assets/imagesWeb/images/cardImages/card5.jpg";
import card6 from "../../../assets/imagesWeb/images/cardImages/card6.jpg";

// Images
import ServicesComponent from "components/OurServices/services";
import WhoWeAreComponent from "components/WhoWeAre/whoWeAre";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={10}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            100+ Farmers and Consumers
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Our track record speaks volumes&apos;we&apos;ve stood by our promises, delivering not
            just products and services but fostering enduring relationships built on reliability and
            integrity. Farmers rely on us as their steadfast partners in growth, knowing that our
            expertise and support extend beyond transactions.
          </MKTypography>
        </Grid>
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
        <ServicesComponent />
        <Divider sx={{ my: 3 }} />
        <WhoWeAreComponent />
        <Divider sx={{ my: 3 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
