"use client";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import styled from "@mui/material/styles/styled";
import { FC } from "react";

// Styled LinearProgress with custom colors
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.MuiLinearProgress-colorPrimary`]: {
    backgroundColor: "var(--app-lighter-gray)", // Background color of the loader
  },
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 5,
    backgroundColor: "black", // Set the progress color to black
  },
}));

interface IAppProgressProps {
  progress: number;
}

const AppProgressBar: FC<IAppProgressProps> = (props) => {
  const { progress } = props;

  return (
    <Box>
      <BorderLinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default AppProgressBar;
