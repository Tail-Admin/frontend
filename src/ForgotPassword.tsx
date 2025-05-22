import {Input} from './components/Input'
import { MainButton} from './components/MainButton'
import { BackButton } from './components/BackButton'
import { AuthFooter } from './components/AuthFooter'
import { LogoSide } from './components/LogoSide'
import { ThemeButton } from './components/ThemeButton'

export const ForgotPassword = () => {
return <div className='relative font-primary flex justify-center h-[800px]'>
  <div className='flex items-center'>
  <div className='w-[360px] md:w-[735px] h-full'>
<BackButton />
<div className='flex items-center justify-center flex-col'>

<div className='w-[280px] mt-[24px] md:w-[440px] md:mt-[70px] flex items-center justify-center flex-col'>
  <div className='flex justify-start flex-col w-full gap-[12px]'>
    <h1 className='text-2xl md:text-4xl font-semibold text-[#1D2939]'>Forgot Your Password?</h1>
    <p className='text-sm text-[#667085]'>Enter your email and we’ll send a secure link to reset it.<br/> Check spam if you don’t see it.</p>
  </div>

  <div className='flex items-center justify-center flex-col w-full my-[24px]'>
    <Input placeholder='Enter your email' 
       inputName='Email'

       className='w-full  md:w-[440px] h-[44px]
        px-4 py-[10px]       
        rounded-lg           
        border               
        border-[#D0D5DD]     
        shadow-sm           
        focus:outline-none   
        focus:ring-2         
        focus:ring-[#465FFF]/30
        text-[#101828]       
        placeholder-[#98A2B3] 
        bg-white' />

  </div>
<div className='flex items-center justify-center'>
<MainButton buttonText='Send Reset Link' />
</div>
<AuthFooter text='Wait, I remember my password...' link='Click here' url=''/>
</div>
</div>
</div>
<LogoSide/>
</div>
    <div className='md:hidden'>
        <ThemeButton />
    </div>

</div>
}

