import LoginForm from "./components/LoginForm";
import { Title, Сontainer } from "./styles";
import LinkText from "@/components/LinkText";
import React, { ReactElement } from "react";

export default function LoginPage(): ReactElement {
  return (
    <Сontainer>
      <Title variant="h3">Login</Title>
      <LoginForm />
      <LinkText
        sx={{ margin: "1rem 0 0 0" }}
        to="/register"
        text="Don't you have an account?"
      />
    </Сontainer>
  );
}
