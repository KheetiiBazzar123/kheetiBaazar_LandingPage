import React from "react";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import TransportationIcon from "@mui/icons-material/LocalShipping";
import SupplyChainIcon from "@mui/icons-material/AccountTree";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import styled from "@emotion/styled";

const ServiceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1),
  "&:hover": {
    backgroundColor: " #358EED",
  },
}));

const ServiceIcon = styled("div")({
  marginBottom: 16,
  "& svg": {
    fontSize: "5rem",
  },
});

const ServiceTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: "1rem",
});

const services = [
  { icon: <TransportationIcon />, title: "TRANSPORTATIONS" },
  { icon: <SupplyChainIcon />, title: "SUPPLY CHAIN" },
  { icon: <BreakfastDiningIcon />, title: "Quality Product" },
];

const ServicesComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <Box flex={1} mr={{ xs: 0, md: 2 }} mb={{ xs: 2, md: 0 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          SERVICES AND SOLUTIONS CUSTOMIZED FOR YOU
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          gutterBotto
          sx={{ fontSize: { xs: "14px", md: "14px" } }}
        >
          At Kheetii Bazaar, we are dedicated to revolutionizing the agricultural landscape by
          eliminating unnecessary intermediaries.Empowering farmers and consumers by cutting out
          middlemen. We offer fair rates for harvest, efficient transportation, and a streamlined
          supply chain. Experience quality products at competitive prices, ensuring a direct and
          transparent exchange. Join us for a sustainable partnership in agriculture.
        </Typography>
      </Box>

      <Grid container spacing={isMobile ? 2 : 4} flex={1}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceBox>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle variant="subtitle1">{service.title}</ServiceTitle>
            </ServiceBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesComponent;
