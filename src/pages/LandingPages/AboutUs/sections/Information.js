import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import CardImage from "../../../../assets/imagesWeb/images/cardImages/card1.jpg";

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
                    title="Sustainable Agriculture"
                    description="Our core philosophy revolves around sustainable agriculture practices. We believe in nurturing the land in a manner that preserves and enhances its fertility for future generations."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12}>
                <MKBox mb={3}>
                  <DefaultInfoCard
                    title="Preserving Agricultural Traditions"
                    description="While embracing modern methodologies, we hold the rich tapestry of agricultural traditions close to our hearts."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12}>
                <MKBox mb={3}>
                  <DefaultInfoCard
                    title="Economic Viability"
                    description="Recognizing the significance of agriculture as an economic backbone, we work towards ensuring the economic viability of farming endeavors. By facilitating fair trade practices, market access, and financial support, we contribute to the financial stability of farming communities, fostering a resilient and thriving agricultural sector."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12}>
                <MKBox mb={3}>
                  <DefaultInfoCard
                    title="Community-Centric Approach"
                    description="At the heart of our endeavors lies a deep commitment to community welfare. We engage with local communities, providing training, resources, and support to empower farmers."
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
