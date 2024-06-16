import { User } from "@/types/types";

export const me = async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}users/me`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    method: "GET",
    credentials: "include",
  });

  const json = await response.json();

  const user = (response.ok ? json : {}) as User;

  return {
    error: json?.error as string,
    user,
  };
};
