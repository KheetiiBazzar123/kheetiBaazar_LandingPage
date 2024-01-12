import React from "react";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import TransportationIcon from "@mui/icons-material/LocalShipping";
import SupplyChainIcon from "@mui/icons-material/AccountTree";
import WarehousingIcon from "@mui/icons-material/Store";
import TruckingIcon from "@mui/icons-material/LocalShippingOutlined";
import FtlIcon from "@mui/icons-material/Inventory2";
import ThreePLIcon from "@mui/icons-material/Handyman";
import styled from "@emotion/styled";

const ServiceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ServiceIcon = styled("div")({
  marginBottom: 16,
  "& svg": {
    fontSize: "3rem",
  },
});

const ServiceTitle = styled(Typography)({
  fontWeight: "bold",
});

const services = [
  { icon: <TransportationIcon />, title: "TRANSPORTATIONS" },
  { icon: <SupplyChainIcon />, title: "SUPPLY CHAIN" },
  { icon: <WarehousingIcon />, title: "WAREHOUSING" },
  { icon: <TruckingIcon />, title: "TRUCKING" },
  { icon: <FtlIcon />, title: "FTL" },
  { icon: <ThreePLIcon />, title: "3PL" },
];

const ServicesComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box p={3}>
      <Typography variant="h5" component="h2" gutterBottom>
        SERVICES AND SOLUTIONS CUSTOMIZED FOR YOUR NEEDS
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Jaipur Golden is a leading provider of specialized service in integrated multi-mode
        solutions for the transportations of bulk of container cargo. Jaipur Golden provides a
        single window for businesses that seek seamless transportation, warehousing, supply chain
        management and trucking.
      </Typography>
      <Grid container spacing={isMobile ? 2 : 4}>
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
