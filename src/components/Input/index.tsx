import { InputType } from "../../types/inputType";

const Input: React.FC<InputType> = ({ label, isPassword, ...rest }) => {
  return (
    <>
      <label>{label}</label>
      <input type={isPassword ? "password" : "text"} {...rest} />
    </>
  );
};

export default Input;
