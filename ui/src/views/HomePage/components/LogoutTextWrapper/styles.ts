import { Colors } from "@/constants/colors";
import { styled, Typography as BaseTypography } from "@mui/material";

export const Typography = styled(BaseTypography)({
  textAlign: "center",
  fontSize: "3rem",
  margin: "0 1rem",
  textDecoration: "underline",
  color: Colors.Blue,
});
