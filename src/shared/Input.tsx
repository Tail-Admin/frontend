import { useId } from "react"

interface InputProps {
    inputName: string
    placeholder: string,
    className: string
}

export const Input = ({inputName, placeholder, className}: InputProps) => {
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