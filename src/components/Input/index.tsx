import { InputType } from "../../types/inputType";
import { Container, Error } from "./styles";

const Input: React.FC<InputType> = ({ label, isPassword, error, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <input type={isPassword ? "password" : "text"} {...rest} />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Input;
