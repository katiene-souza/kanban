import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(8, "O nome deve ter no mínimo 8 caracteres")
    .trim()
    .required("Por favor digite seu nome completo"),
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
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem coincidir")
    .required("Por favor, repita sua senha"),
});
