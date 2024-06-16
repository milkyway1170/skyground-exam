import { styled, Table as BaseTable } from "@mui/material";

export const Table = styled(BaseTable)({
  width: "50rem",
  margin: "2rem auto",
  "& th , & td": {
    padding: "0.5rem 1rem",
    fontSize: "2rem",
    textOverflow: "ellipsis",
    textAlign: "center",
  },
  "& th ": { fontWeight: "bold" },
});
