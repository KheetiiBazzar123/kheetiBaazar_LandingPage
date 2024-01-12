import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import styled from "@emotion/styled";

const WhoWeAreBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  borderRadius: theme.shape.borderRadius,
}));

const VideoContainer = styled("div")({
  position: "relative",
  width: "100%", // Responsive width
  paddingBottom: "56.25%", // Aspect ratio for 16:9
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

const PlayButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": {
    color: "#ff0000", // Red color on hover for the play button
  },
});

const WhoWeAreComponent = () => {
  // You can replace this with the actual video URL or path
  const videoSrc = "/path/to/your/video.mp4";

  return (
    <WhoWeAreBox>
      <Typography variant="h6" component="h3" gutterBottom>
        WHO WE ARE
      </Typography>
      <VideoContainer>
        <PlayButton aria-label="play video">
          <PlayCircleOutlineIcon style={{ fontSize: "4rem" }} />
        </PlayButton>
        {/* If you are using a video file */}
        <video src={videoSrc} controls />

        {/* If you are embedding a video from YouTube or another platform */}
        {/* <iframe
          src="https://www.youtube.com/embed/VIDEO_ID"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video title"
        ></iframe> */}
      </VideoContainer>
    </WhoWeAreBox>
  );
};

export default WhoWeAreComponent;
