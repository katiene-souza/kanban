export type InputType = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  isPassword?: boolean;
  error?: InputHTMLAttributes<HTMLInputElement>;
};
