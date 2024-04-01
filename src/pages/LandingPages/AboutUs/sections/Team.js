/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/imagesWeb/images/teamImage/amit.jpeg";
import team2 from "assets/imagesWeb/images/teamImage/pandey.jpeg";
import team3 from "assets/imagesWeb/images/teamImage/rajat.jpeg";
import team4 from "assets/imagesWeb/images/teamImage/ranjit.jpeg";
import team5 from "assets/imagesWeb/images/teamImage/nidhi.jpeg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Our Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              We Are Introducing Our Team
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team5}
                name="Nidhi "
                position={{ color: "info", label: "Chief Technology Officer" }}
                description="Driving innovation through technology to achieve our strategic vision. Empowering teams to harness the full potential"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Amit Thakur"
                position={{ color: "info", label: " Chief Operations officer" }}
                description="Streamlining operational processes to enhance efficiency and optimize resource allocation."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Rajat"
                position={{ color: "info", label: "Chief Marketing officer" }}
                description="FCrafting compelling brand narratives that resonate with our target audience and drive customer engagement."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team2}
                name="Pandey"
                position={{ color: "info", label: "Chief Sales officer" }}
                description="Leading a dynamic sales force to exceed revenue targets through strategic planning and client-centric approaches."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team4}
                name="Sanjay"
                position={{ color: "info", label: "Chief executive officer" }}
                description="Guiding the company with a bold vision and unwavering commitment to excellence, driving sustainable growth and shareholder value."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
