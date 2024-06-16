import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  email: Yup.string().email().notRequired().default(undefined),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number ")
    .matches(/^(?=.*[A-Za-z])/, "Must contain at least one character.")
    .notRequired()
    .default(undefined),
  fullName: Yup.string()
    .required("Full name is required")
    .min(5, "Full name must be at least 5 characters")
    .notRequired()
    .default(undefined),
});
export const formOptions = { resolver: yupResolver(formSchema) };
