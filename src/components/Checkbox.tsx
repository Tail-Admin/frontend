interface CheckboxProps {
    checkboxText: string
}

export const Checkbox = ({checkboxText} : CheckboxProps) => {
    return (
        <div className='w-[280px] md:w-[380px] flex justify-start items-center gap-2.5'>
         <input type='checkbox' 
         className='w-5 h-5 accent-[#465FFF] rounded-full border-[1.25px] border-solid border-[#D0D5DD]'
         />
         <label className='text-sm text-[#344054]'>{checkboxText}</label>
        </div>
    )
}