import { StyledForm } from "./styles";
import { login } from "@/api/mutations/login";
// import { useSignInMutation } from '@/api/hooks/signIn'
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

const FIELD_NAMES: Array<keyof ISignInRequest> = ["email", "password"];
export interface ISignInRequest {
  email: string;
  password: string;
}

export default function LoginForm(): ReactElement {
  const dispatch = useNotification();
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const { handleSubmit, controlFields } = useFormFieldsControl<ISignInRequest>(
    FIELD_NAMES,
    formOptions
  );

  const handleShowPassword = (): void => setIsShowPassword(!isShowPassword);

  const handleSignIn: SubmitHandler<ISignInRequest> = async ({
    email,
    password,
  }): Promise<void> => {
    const response = await login({
      email,
      password,
    });

    if (response.error != null) {
      dispatch({
        title: "Authorization",
        message: response.error,
        type: NotificationType.Danger,
      });
    } else {
      navigate("/");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleSignIn)}>
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
        Log in
      </Button>
    </StyledForm>
  );
}
