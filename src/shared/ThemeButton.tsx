import moonButtonIcon from '../assets/MoonForThemeButton.svg'

interface ThemeButtonProps {
    className?: string
}

export const ThemeButton = ({className='absolute right-[20px] bottom-[20px] md:right-[24px] md:bottom-[24px] flex justify-center items-center rounded-full w-[52px] h-[52px] bg-brightblue'}: ThemeButtonProps) => {
    return <button className={className}>
        <img src={moonButtonIcon}/>
        </button>
}