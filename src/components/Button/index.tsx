import { ButtonType } from "../../types/buttonType"

const Button: React.FC<ButtonType> = ({text, ...rest}) => {
    return (
        <button type="button" {...rest}>
            {text}
        </button>
    )
}

export default Button;