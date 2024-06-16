export const logout = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}auth/logout`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "DELETE",
      credentials: "include",
    }
  );

  const json = response.ok ? {} : await response.json();

  return {
    error: json?.error as string,
  };
};
