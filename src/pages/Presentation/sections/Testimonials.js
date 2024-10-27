import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "../../../components/MKBox/MKBoxRoot";
import MKTypography from "components/MKTypography";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={20}
          lg={12}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2" display="block" sx={{ width: "100%" }}>
            Trusted by over
          </MKTypography>
          <MKTypography
            variant="h2"
            color="info"
            textGradient
            mb={2}
            display="block"
            sx={{ width: "100%" }}
          >
            50+ Farmers and Consumers
          </MKTypography>

          <MKTypography variant="body1" color="text" mb={2}>
            Our commitment to innovation in agriculture directly benefits farmers and consumers.
            Farmers partnering with us earn 15% more compared to traditional systems, while
            consumers save an average of 10% compared to local market prices. By optimizing the
            supply chain, we reduce agricultural waste by 20%, delivering value with every
            transaction and building long-term, trustworthy relationships rooted in reliability and
            mutual growth.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
