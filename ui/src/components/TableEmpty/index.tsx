import { Container, Title } from "./styles";
import React, { ReactElement } from "react";

export interface ITableEmptyProps {
  tableName: string;
}

export default function TableEmpty({
  tableName,
}: ITableEmptyProps): ReactElement {
  return (
    <Container>
      <Title variant="h4">
        In the table &quot;{tableName}&quot; no records!
      </Title>
    </Container>
  );
}
