import { Content, Сontainer } from "./styles";
import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export default function DefaultLayout(): ReactElement | null {
  return (
    <Сontainer>
      <Content>
        <Outlet />
      </Content>
    </Сontainer>
  );
}
