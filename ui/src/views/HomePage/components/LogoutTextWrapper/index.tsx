import { Typography } from "./styles";
import { logout } from "@/api/mutations/logout";
import { useNotification } from "@/hooks/useNotification";
import { NotificationType } from "@/providers/Notification/Notification.types";
import { SxProps, Theme } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

export interface LogoutTextWrapperProps {
  sx?: SxProps<Theme>;
}

export default function LogoutTextWrapper({
  children,
  sx,
}: PropsWithChildren<LogoutTextWrapperProps>) {
  const dispatch = useNotification();

  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    const response = await logout();

    if (response.error != null) {
      dispatch({
        title: "Logout",
        message: response.error,
        type: NotificationType.Danger,
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <Typography sx={sx} onClick={handleLogout}>
      {children}
    </Typography>
  );
}
