import { useId } from "react"

interface CheckboxProps {
    checkboxText: string,
    className: string
}

export const Checkbox = ({checkboxText, className} : CheckboxProps) => {
    const id = useId();
    return (
        <div className='w-[280px] md:w-[380px] flex justify-start items-center gap-2.5'>
         <input id={id} type='checkbox' 
         className={className}
         />
         <label id={id} className='text-sm text-[#344054]'>{checkboxText}</label>
        </div>
    )
}