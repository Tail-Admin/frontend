import moonButtonIcon from '../assets/MoonForThemeButton.svg'

interface ThemeButtonProps {
    className: string
}

export const ThemeButton = ({className}: ThemeButtonProps) => {
    return <button className={className}>
        <img src={moonButtonIcon}/>
        </button>
}