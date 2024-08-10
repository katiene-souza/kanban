import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .min(8, "O email deve ter no mínimo 8 caracteres")
    .trim()
    .email("Por favor, digite um e-mail válido!")
    .required("Por favor digite seu e-mail"),
  password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .trim()
    .required("Por favor, digite sua senha"),
});
