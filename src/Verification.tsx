import { MainButton} from './shared/MainButton'
import { BackButton } from './shared/BackButton'
import { AuthFooter } from './shared/AuthFooter'
import { LogoSide } from './shared/LogoSide'
import { ThemeButton } from './shared/ThemeButton'
import { VerificationInput } from './shared/VerificationInputs'
import { TopContainerStyle, MiddleContainerStyle, InnerContainerStyle } from './shared/PageContainerStyles'

export const Verification = () => {
return <div className={TopContainerStyle}>
            <div className={MiddleContainerStyle}>
              <div className={InnerContainerStyle}>
                <BackButton />
                <div className='flex items-center justify-center flex-col'>

                  <div className='w-[280px] mt-[24px] md:w-[440px] md:mt-[70px] flex items-center justify-center flex-col'>
                    <div className='flex justify-start flex-col w-full gap-3'>
                      <h1 className='text-2xl md:text-4xl font-semibold text-darkblue'>Two Step Verification</h1>
                      <p className='text-sm text-darkgray'>Enter the 6-digit code we sent to your email. Check spam if you don’t see it.</p>
                    </div>

                    <div className='flex items-center justify-center flex-col w-full my-[24px]'>
                      <VerificationInput numberOfInputs={6} className='w-10 h-10 md:w-15
                        text-center text-xl font-medium
                        rounded-lg           
                        border               
                        border-gray     
                        shadow-sm           
                        focus:outline-none   
                        focus:ring-2         
                        focus:ring-brightblue/30
                        text-blackblue'/>

                    </div>
                    <div className='flex items-center justify-center'>
                    <MainButton buttonText='Verify My Account' className='bg-brightblue 
                            flex items-center justify-center
                            text-white w-[280px] md:w-[440px] h-[44px] 
                            rounded-lg border
                            font-medium'/>
                    </div>
                     <AuthFooter text="Didn't get the code?" link='Resend' url='' className='flex justify-center md:justify-start items-center gap-2 w-full mt-[20px] text-sm'/>
                  </div>
                </div>
              </div>
          <LogoSide/>
            </div>
              <div className='md:hidden'>
                  <ThemeButton className='
                    absolute 
                    right-[20px] bottom-[20px]
                    md:right-[24px] md:bottom-[24px] 
                    flex justify-center items-center 
                    rounded-full 
                    w-[52px] h-[52px] 
                    bg-brightblue'/>
              </div>

        </div>
}

