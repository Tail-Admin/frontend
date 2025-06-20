import type { RegistrationResponse } from "../interfaces/IApi"

interface MainButtonProps {
    buttonText: string,
    className: string,
    disabled?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement> 
}

export const MainButton = ({buttonText, className, disabled, onClick}: MainButtonProps) => {
    return <button className={className} disabled={disabled} onClick={onClick}>
        {buttonText}
        </button>
}