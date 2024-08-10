import { ValidationError } from "yup";
import { RegisterType } from "../types/registerType";

export const handleRegisterErrors = (error: ValidationError): RegisterType => {
  const newErrors: RegisterType = {} as RegisterType;

  error.inner.forEach((err) => {
    if (err.path) {
      newErrors[err.path as keyof RegisterType] = err.message;
    }
  });

  return newErrors;
};
