import { StyledForm } from "./styles";
import { registration } from "@/api/mutations/registration";
import FormField from "@/components/FormField";
import useFormFieldsControl from "@/hooks/useFormFieldsControl";
import { useNotification } from "@/hooks/useNotification";
import { NotificationType } from "@/providers/Notification/Notification.types";
import { formOptions } from "@/utils/validation";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { ReactElement, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FIELD_NAMES: Array<keyof IRegistrationRequest> = [
  "email",
  "password",
  "fullName",
];
export interface IRegistrationRequest {
  email: string;
  password: string;
  fullName: string;
}

export default function RegistrationForm(): ReactElement {
  const dispatch = useNotification();
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const { handleSubmit, controlFields } =
    useFormFieldsControl<IRegistrationRequest>(FIELD_NAMES, formOptions);

  const handleShowPassword = (): void => setIsShowPassword(!isShowPassword);

  const handleRegistration: SubmitHandler<IRegistrationRequest> = async ({
    email,
    password,
    fullName,
  }): Promise<void> => {
    const response = await registration({
      email,
      password,
      fullName,
    });

    if (response.error != null) {
      dispatch({
        title: "Registration",
        message: response.error,
        type: NotificationType.Danger,
      });
    } else {
      navigate("/home");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleRegistration)}>
      <FormField
        label="Full Name"
        name="fullName"
        placeholder="Enter your full name"
        {...controlFields.fullName}
      />
      <FormField
        label="Email"
        name="email"
        placeholder="Enter your email"
        {...controlFields.email}
      />
      <FormField
        icon={isShowPassword ? <VisibilityOff /> : <Visibility />}
        label="Password"
        name="password"
        placeholder="Enter your password"
        type={isShowPassword ? "text" : "password"}
        onIconClick={handleShowPassword}
        {...controlFields.password}
      />
      <Button
        color="primary"
        sx={{ fontSize: "1.4rem" }}
        type="submit"
        variant="contained"
        disableElevation
        fullWidth
      >
        Registrate
      </Button>
    </StyledForm>
  );
}
