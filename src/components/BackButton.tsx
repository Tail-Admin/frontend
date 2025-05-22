export const BackButton = () => {
    return <div className='flex justify-start items-center mt-[24px] ml-[34px] md:mt-[70px] md:ml-[140px]'>
        <div className='flex items-center justify-center hover:cursor-pointer'>
            <div className='w-[20px] h-[20px] flex items-center justify-center'>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.70833 1L1.5 6.20833L6.70833 11.4167" 
                stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                <p className='text-sm font-normal text-[#344054]'>Back to dashboard</p>
        </div>
    </div>
}