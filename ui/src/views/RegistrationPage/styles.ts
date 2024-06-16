import { Box, styled, Typography } from "@mui/material";

export const Сontainer = styled(Box)({
  width: "100%",
  maxWidth: "40rem",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const Title = styled(Typography)({
  textAlign: "center",
  margin: "0 0 2rem 0",
});
