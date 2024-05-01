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
      </Container>
    </MKBox>
  );
}

export default Information;
