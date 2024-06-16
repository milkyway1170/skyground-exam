import LogoutTextWrapper from "./components/LogoutTextWrapper";
import UsersTable from "./components/UsersTable";
import { GreatingContainer, Title, Сontainer } from "./styles";
import { getAllUsers } from "@/api/query/getAllUsers";
import { me } from "@/api/query/me";
import TableEmpty from "@/components/TableEmpty";
import { useNotification } from "@/hooks/useNotification";
import { NotificationType } from "@/providers/Notification/Notification.types";
import { User } from "@/types/types";
import React, { ReactElement, useEffect, useState } from "react";

export default function HomePage(): ReactElement {
  const dispatch = useNotification();
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();

  const fetchMe = async () => {
    const res = await me();

    if (res.error != null) {
      dispatch({
        title: "Get Me",
        message: res.error,
        type: NotificationType.Danger,
      });
    } else {
      setCurrentUser(res.user);
    }
  };

  const fetchGetAllUsers = async () => {
    const res = await getAllUsers();

    if (res.error != null) {
      dispatch({
        title: "Get all users",
        message: res.error,
        type: NotificationType.Danger,
      });
    } else {
      setUsers(res.users);
    }
  };

  useEffect(() => {
    fetchMe();
    fetchGetAllUsers();
  }, []);

  console.log(users.length < 0, users.length);

  return (
    <Сontainer>
      <GreatingContainer>
        {currentUser == null ? (
          <>
            <Title>
              Sorry, but someting went wrong. You can to logout click
            </Title>
            <LogoutTextWrapper>here</LogoutTextWrapper>
            <Title>and try again</Title>
          </>
        ) : (
          <>
            <Title>Welcome, {currentUser?.fullName}! To logout click</Title>
            <LogoutTextWrapper>here</LogoutTextWrapper>
          </>
        )}
      </GreatingContainer>
      {users.length > 0 ? (
        <UsersTable users={users} />
      ) : (
        <TableEmpty tableName="Users" />
      )}
    </Сontainer>
  );
}
