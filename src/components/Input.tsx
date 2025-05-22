interface InputProps {
    inputName: string
    placeholder: string,
    className: string
}

export const Input = ({inputName, placeholder, className}: InputProps) => {
    return (
        <div className='w-full md:h-[70px]'>
            <div className='flex items-center mb-[6px]'>
                <p>{inputName}</p><p className='text-[#F04438]'><b>*</b></p>
            </div>
            <input 
             placeholder={placeholder}
             className={className}
        ></input>
        </div>
    )
}