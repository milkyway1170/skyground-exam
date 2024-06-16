export type LoginDTO = {
  email: string;
  password: string;
};

export const login = async (dto: LoginDTO) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}auth/login`, {
    body: JSON.stringify(dto),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    method: "POST",
    credentials: "include",
  });

  const json = response.ok ? {} : await response.json();

  return {
    error: json?.error as string,
  };
};
