import { User } from "@/types/types";

export const getAllUsers = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}users`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    method: "GET",
    credentials: "include",
  });

  const json = await response.json();

  const users = (response.ok ? json : {}) as User[];

  return {
    error: json?.error as string,
    users,
  };
};
