export type RegistrationDTO = {
  email: string;
  password: string;
  fullName: string;
};

export const registration = async (dto: RegistrationDTO) => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}auth/register`,
    {
      body: JSON.stringify(dto),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      credentials: "include",
    }
  );

  const json = response.ok ? {} : await response.json();

  return {
    error: json?.error as string,
  };
};
