import { Table } from "./styles";
import { User } from "@/types/types";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export interface UsersTableProps {
  users: User[];
}

export default function UsersTable({ users }: UsersTableProps) {
  return (
    <Table>
      <TableHead sx={{ fontSize: "3rem" }}>
        <TableRow>
          <TableCell>Full Name</TableCell>
          <TableCell>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user: User) => (
          <TableRow key={user.id}>
            <TableCell>{user.fullName}</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
