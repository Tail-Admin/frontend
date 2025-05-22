import { MainButton} from './components/MainButton'
import { BackButton } from './components/BackButton'
import { AuthFooter } from './components/AuthFooter'
import { LogoSide } from './components/LogoSide'
import { ThemeButton } from './components/ThemeButton'
import { VerificationInput } from './components/VerificationInputs'

export const Verification = () => {
return <div className='relative font-primary flex justify-center h-[800px]'>
  <div className='flex items-center'>
  <div className='w-[360px] md:w-[735px] h-full'>
<BackButton />
<div className='flex items-center justify-center flex-col'>

<div className='w-[280px] mt-[24px] md:w-[440px] md:mt-[70px] flex items-center justify-center flex-col'>
  <div className='flex justify-start flex-col w-full gap-[12px]'>
    <h1 className='text-2xl md:text-4xl font-semibold text-[#1D2939]'>Two Step Verification</h1>
    <p className='text-sm text-[#667085]'>Enter the 6-digit code we sent to your email. Check spam if you don’t see it.</p>
  </div>

  <div className='flex items-center justify-center flex-col w-full my-[24px]'>
    <VerificationInput/>

  </div>
<div className='flex items-center justify-center'>
<MainButton buttonText='Verify My Account' />
</div>
<AuthFooter text="Didn't get the code?" link='Resend' url=''/>
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

