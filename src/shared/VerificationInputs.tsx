import { useId } from "react"

interface VerificationProps {
    numberOfInputs: number,
    className: string
}

export const VerificationInput = ({numberOfInputs = 6, className}: VerificationProps) => {
    const createInputs = Array(numberOfInputs).fill(0).map(() => (
                    <input
                        key={useId()}
                        placeholder=''
                        maxLength={1}
                        className={className}
                    ></input>))
    

    return (
        <div className='w-full md:h-[70px]'>
            <div className='flex items-center mb-[6px]'>
                <p>Type your code</p>
            </div>
                <div className='flex justify-between items-center gap-1'>
                {createInputs}
                </div>
        </div>
    )
}