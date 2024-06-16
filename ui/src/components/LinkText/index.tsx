import { Text } from "./styles";
import { SxProps } from "@mui/material";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface ILinkTextProps {
  sx: SxProps;
  to: string;
  text: string;
}

export default function LinkText({
  to,
  text,
  sx,
}: ILinkTextProps): ReactElement {
  return (
    <Link style={{ textDecoration: "none" }} to={to}>
      <Text sx={sx} align="center">
        {text}
      </Text>
    </Link>
  );
}
