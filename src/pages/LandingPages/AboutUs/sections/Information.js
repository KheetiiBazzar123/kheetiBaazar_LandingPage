import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// import CardImage from "../../../../assets/imagesWeb/images/cardImages/card1.jpg";
import CardImage from "../../../../assets/imagesWeb/images/aboutSection/abotBg.jpg";
function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={12}>
                <MKBox mb={3}>
                  <DefaultInfoCard
                    title="HarvestTech Solutions: Revolutionizing Agriculture"
                    description="
Goal To empower Indian farmers with cutting-edge technology transforming traditional agricultural practices into sustainable organic methods through our innovative e-marketplace platform."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12}>
                <MKBox mb={3}>
                  <DefaultInfoCard
                    title="Bridging the Gap Between Farmers and Technology."
                    description="
                    Goal: To bridge the technological gap in Indian agriculture by providing a comprehensive e-marketplace solution, enhancing farmers' livelihoods and fostering a transition towards organic farming practices."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12}>
                <MKBox mb={3}>
                  <DefaultInfoCard
                    title="Organic Harvest Hub: Empowering Farmers"
                    description="
                    Goal: To establish a thriving ecosystem where Indian farmers can access technology-driven tools and resources through our e-marketplace, fostering organic farming practices and elevating agricultural sustainability."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12}>
                <MKBox mb={3}>
                  <DefaultInfoCard
                    title="GreenVine AgriTech: Cultivating Futures, Digitally"
                    description="Goal: To cultivate a future where Indian agriculture thrives on sustainability and innovation, leveraging our e-marketplace platform to empower farmers, drive organic practices, and revolutionize the agricultural landscape."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          {/* Image Content */}
          <Grid item xs={12} md={6}>
            <CenteredBlogCard
              image={CardImage}
              title={"About Section Image"}
              sx={{
                width: "100%", // Ensures the image takes the full width of the grid item
                height: "auto", // Adjust height as needed
                maxHeight: "400px", // Limit the maximum height
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
