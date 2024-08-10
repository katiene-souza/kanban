import { ValidationError } from "yup";
import { LoginType } from "../types/loginType";

export const handleLoginErrors = (error: ValidationError): LoginType => {
  const newErrors: LoginType = {} as LoginType;

  error.inner.forEach((err) => {
    if (err.path) {
      newErrors[err.path as keyof LoginType] = err.message;
    }
  });

  return newErrors;
};
