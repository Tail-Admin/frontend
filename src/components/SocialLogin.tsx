import type { ReactElement } from 'react';

interface SocialLoginProps {
    icon: ReactElement,
    text: string
}
export const SocialLogin = ({icon, text}: SocialLoginProps) => {
return <div className='flex justify-center items-center gap-2 w-[280px] md:w-[210px] h-[44px] bg-[#E4E7EC] rounded-lg cursor-pointer'>
    {icon}
    <p className='text-sm'>{text}</p>

  </div>
}

