import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import messages from "../../constants/messages";
import {
  Container,
  Form,
  OtherOption,
  SignUpLink,
  SignUp,
  Title,
} from "./styles";
import { useState } from "react";
import { LoginType } from "../../types/loginType";
import { loginService } from "../../services/api";
import useAuth from "../../contexts/AuthContext";
import { ValidationError } from "yup";
import { handleLoginErrors } from "../../utils/handleLoginErrors";
import { loginSchema } from "../../schemas/loginValidation";

const SignIn = () => {
  const [loginData, setLoginData] = useState<LoginType>({} as LoginType);
  const [errors, setErrors] = useState<LoginType>({} as LoginType);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginSchema.validate(loginData, { abortEarly: false });
      const response = await loginService({ ...loginData });
      signIn(response.token);
      navigate("/board");
    } catch (error) {
      if (error instanceof ValidationError) {
        const newErrors = handleLoginErrors(error);
        setErrors(newErrors);
      }
    }
  };

  return (
    <Container>
      <Title>{messages.PagesTitle.login}</Title>
      <Form>
        <Input
          label={messages.Labels.email}
          placeholder={messages.Placeholder.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          error={errors.email}
        />
        <Input
          label={messages.Labels.password}
          placeholder={messages.Placeholder.password}
          isPassword={true}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          error={errors.password}
        />
        <Button text={messages.Buttons.login} onClick={handleLogin} />
      </Form>
      <SignUp>
        <OtherOption>{messages.Texts.or}</OtherOption>
        <SignUpLink>
          {messages.Texts.noAccount}
          <Link to="/signup" id="link">
            {messages.Texts.registrationLink}
          </Link>
        </SignUpLink>
      </SignUp>
    </Container>
  );
};

export default SignIn;
