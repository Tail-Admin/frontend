interface MainButtonProps {
    buttonText: string
}

export const MainButton = ({buttonText}: MainButtonProps) => {
    return <button className='bg-[#465FFF] 
    flex items-center justify-center
    text-white w-[280px] md:w-[440px] h-[44px] 
    rounded-lg border
    font-medium'>
        {buttonText}
        </button>
}