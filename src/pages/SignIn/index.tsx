import { Button, Input } from "../../components";
import messages from "../../constants/messages";
import { Container, Form, SignUpLink, Title } from "./styles";

const SignIn = () => {
  return (
    <Container>
      <Title>{messages.PagesTitle.login}</Title>
      <Form>
        <Input
          label={messages.Labels.email}
          placeholder={messages.Placeholder.email}
        />
        <Input
          label={messages.Labels.password}
          placeholder={messages.Placeholder.password}
        />
        <Button text={messages.Buttons.login}/>
      </Form>
      <SignUpLink>
        {messages.Texts.noAccount}
      </SignUpLink>
    </Container>
  );
};

export default SignIn;
