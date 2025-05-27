import backArrow from '../assets/BackArrow.svg';

export const BackButton = () => {
  return (
    <button
      className='flex items-center justify-center hover:cursor-pointer focus:outline-none mt-[24px] ml-[34px] md:mt-[70px] md:ml-[140px]'
    >
      <img src={backArrow} className='mr-1'/>
      <span className='text-sm font-normal text-[#344054]'>Back to dashboard</span>
    </button>
  );
};