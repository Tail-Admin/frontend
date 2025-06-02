import {Input} from './shared/Input'
import { MainButton} from './shared/MainButton'
import { BackButton } from './shared/BackButton'
import { AuthFooter } from './shared/AuthFooter'
import { LogoSide } from './shared/LogoSide'
import { ThemeButton } from './shared/ThemeButton'
import { TopContainerStyle, MiddleContainerStyle, InnerContainerStyle } from './shared/PageContainerStyles'

export const ForgotPassword = () => {
return <div className={TopContainerStyle}>
            <div className={MiddleContainerStyle}>
              <div className={InnerContainerStyle}>
                <BackButton />
                <div className='flex items-center justify-center flex-col'>

                  <div className='w-[280px] mt-[24px] md:w-[440px] md:mt-[70px] flex items-center justify-center flex-col'>
                    <div className='flex justify-start flex-col w-full gap-3'>
                      <h1 className='text-2xl md:text-4xl font-semibold text-darkblue'>Forgot Your Password?</h1>
                      <p className='text-sm text-darkgray'>Enter your email and we’ll send a secure link to reset it.<br/> Check spam if you don’t see it.</p>
                    </div>

                    <div className='flex items-center justify-center flex-col w-full my-[24px]'>
                      <Input placeholder='Enter your email' 
                      inputName='Email'

                      />

                    </div>
                    <div className='flex items-center justify-center'>
                      <MainButton buttonText='Send Reset Link' className='bg-brightblue 
                          flex items-center justify-center
                          text-white w-[280px] md:w-[440px] h-[44px] 
                          rounded-lg border
                          font-medium' />
                    </div>
                    <AuthFooter text='Wait, I remember my password...' link='Click here' url='' className='flex justify-center md:justify-start items-center gap-2 w-full mt-[20px] text-sm'/>
                  </div>
                </div>
              </div>
            <LogoSide/>
            </div>
              <div className='md:hidden'>
                  <ThemeButton/>
              </div>

        </div>
}

