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

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// imagage
import CardImage from "../../../../assets/imagesWeb/images/cardImages/card1.jpg";
function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={8}>
            <Grid
              container
              justifyContent="flex-start"
              alignItems="flex-start"
              style={{ padding: "20px" }}
            >
              <Grid item xs={12} md={6} style={{ paddingRight: "10px" }}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    title="Sustainable Agriculture"
                    description="Our core philosophy revolves around sustainable agriculture practices. We believe in nurturing the land in a manner that preserves and enhances its fertility for future generations."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6} style={{ padding: "0 0 10px 10px" }}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    title="Preserving Agricultural Traditions"
                    description="While embracing modern methodologies, we hold the rich tapestry of agricultural traditions close to our hearts."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6} style={{ paddingRight: "10px" }}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    title="Economic Viability"
                    description="Recognizing the significance of agriculture as an economic backbone, we work towards ensuring the economic viability of farming endeavors. By facilitating fair trade practices, market access, and financial support, we contribute to the financial stability of farming communities, fostering a resilient and thriving agricultural sector."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6} style={{ padding: "0 0 10px 10px" }}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    title="Community-Centric Approach"
                    description="At the heart of our endeavors lies a deep commitment to community welfare. We engage with local communities, providing training, resources, and support to empower farmers."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center", // Centers the content horizontally
              alignItems: "center", // Centers the content vertically
            }}
          >
            <CenteredBlogCard
              image={CardImage}
              title={"About Section Image"}
              sx={{
                width: "100%", // Ensures the image takes the full width of the grid item
                height: "100%", // Adjust height as needed
                objectFit: "contain", // Ensures the image is fully visible
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
