import { useId } from "react"

interface InputProps {
    inputName: string
    placeholder: string,
    className?: string
}

export const Input = ({inputName, placeholder, className='w-full md:w-[440px] h-[44px] px-4 py-[10px] rounded-lg border border-gray shadow-sm focus:outline-none focus:ring-2 focus:ring-brightblue/30 text-blackblue placeholder-mediumgray bg-white'}: InputProps) => {
    const id = useId();
    return (
        <div id={id} className='w-full md:h-[70px]'>
            <label className='flex items-center mb-[6px]'>
                <span>{inputName}</span>
                <span className='text-[#F04438]'><b>*</b></span>
            </label>
            <input 
             id={id}
             placeholder={placeholder}
             className={className}
        ></input>
        </div>
    )
}