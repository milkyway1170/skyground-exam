import bcrypt from "bcrypt";

export const hashedPassword = async (password: string) => {
  return bcrypt.hash(password, 10);
};

export const checkPassword = async (password: string, passwordHash: string) => {
  return bcrypt.compare(password, passwordHash);
};
