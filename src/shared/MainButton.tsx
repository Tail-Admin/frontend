interface MainButtonProps {
    buttonText: string,
    className: string
}

export const MainButton = ({buttonText, className}: MainButtonProps) => {
    return <button className={className}>
        {buttonText}
        </button>
}