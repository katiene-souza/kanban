import { ButtonType } from "../../types/buttonType"

const Button: React.FC<ButtonType> = ({text, ...rest}) => {
    return (
        <button {...rest}>
            {text}
        </button>
    )
}

export default Button;