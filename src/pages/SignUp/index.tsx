import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import messages from "../../constants/messages";
import {
  Container,
  Form,
  OtherOption,
  SignUpLink,
  SignIn,
  Title,
} from "./styles";
import { RegisterType } from "../../types/registerType";
import { useState } from "react";
import { registerService } from "../../services/api";
import { registerSchema } from "../../schemas/registerValidation";
import { ValidationError } from "yup";
import { handleRegisterErrors } from "../../utils/handleRegisterErrors";

const SignUp = () => {
  const [registerData, setRegisterData] = useState<RegisterType>(
    {} as RegisterType
  );
  const [errors, setErrors] = useState<RegisterType>({} as RegisterType);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerSchema.validate(registerData, { abortEarly: false });
      const response = registerService({ ...registerData });
      navigate("/signin");
      return response;
    } catch (error) {
      if (error instanceof ValidationError) {
        const newErrors = handleRegisterErrors(error);
        setErrors(newErrors);
      }
    }
  };

  return (
    <Container>
      <Title>{messages.PagesTitle.register}</Title>
      <Form>
        <Input
          label={messages.Labels.name}
          placeholder={messages.Placeholder.name}
          onChange={(e) =>
            setRegisterData({ ...registerData, name: e.target.value })
          }
          error={errors.name}
        />
        <Input
          label={messages.Labels.email}
          placeholder={messages.Placeholder.email}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
          error={errors.email}
        />
        <Input
          label={messages.Labels.password}
          placeholder={messages.Placeholder.password}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
          error={errors.password}
        />
        <Input
          label={messages.Labels.repeatPassword}
          placeholder={messages.Placeholder.password}
          onChange={(e) =>
            setRegisterData({
              ...registerData,
              repeatPassword: e.target.value,
            })
          }
          error={errors.repeatPassword}
        />
        <Button
          text={messages.Buttons.createAccount}
          onClick={handleRegister}
        />
      </Form>
      <SignIn>
        <OtherOption>{messages.Texts.or}</OtherOption>
        <SignUpLink>
          {messages.Texts.noAccount}
          <Link to={"/signin"} id="link">
            {messages.Texts.loginLink}
          </Link>
        </SignUpLink>
      </SignIn>
    </Container>
  );
};

export default SignUp;
