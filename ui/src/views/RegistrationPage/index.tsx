import LinkText from "@/components/LinkText";
import RegistrationForm from "./components/RegistrationForm";
import { Title, Сontainer } from "./styles";
import React, { ReactElement } from "react";

export default function RegistrationPage(): ReactElement {
  return (
    <Сontainer>
      <Title variant="h3">Registration</Title>
      <RegistrationForm />
      <LinkText
        sx={{ margin: "1rem 0 0 0" }}
        to="/login"
        text="Do you already have an account?"
      />
    </Сontainer>
  );
}
