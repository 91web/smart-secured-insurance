import Box from "@mui/material/Box";
import { FC } from "react";
import AppProgressBar from "./appProgress";

interface IInAppLoadingProp {
  progress: number;
}
export const InAppLoading: FC<IInAppLoadingProp> = (props) => {
  const { progress } = props;

  return (
    <Box
      height={"100%"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      bgcolor={"var(--app-lighter-gray)"}
    >
      <Box
        height={"fit-content"}
        margin={"auto"}
        width={{ xs: "40%", md: "15%" }}
      >
        <Box pt={2} px={4}>
          <AppProgressBar progress={progress} />
        </Box>
      </Box>
    </Box>
  );
};
