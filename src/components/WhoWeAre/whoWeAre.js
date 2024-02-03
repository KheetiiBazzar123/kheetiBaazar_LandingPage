import React from "react";
import { Box, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import styled from "@emotion/styled";
import YouTube from "react-youtube";

const WhoWeAreBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const VideoContainer = styled("div")({
  position: "relative",
  width: "100%",
  paddingBottom: "56%",
  height: 0,
  overflow: "hidden",
  "& iframe, & video": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

const WhoWeAreComponent = () => {
  const videoId = "dobUSzv7xPA";

  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <WhoWeAreBox>
      <Typography variant="h6" component="h4" gutterBottom>
        WHO WE ARE
      </Typography>
      <VideoContainer style={{ marginTop: "1rem", borderRadius: "1rem" }}>
        <PlayCircleOutlineIcon style={{ fontSize: "1rem" }} />
        <YouTube videoId={videoId} opts={opts} />
      </VideoContainer>
    </WhoWeAreBox>
  );
};

export default WhoWeAreComponent;
