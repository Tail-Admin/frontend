import {Input} from './shared/Input'
import { MainButton} from './shared/MainButton'
import { BackButton } from './shared/BackButton'
import { Checkbox } from './shared/Checkbox'
import { SocialLoginButton } from './shared/SocialLoginButton'
import { AuthFooter } from './shared/AuthFooter'
import { LogoSide } from './shared/LogoSide'
import { ThemeButton } from './shared/ThemeButton'
import googleLogo from './assets/GoogleLogo.svg'
import xLogo from './assets/Xlogo.svg'
import { TopContainerStyle, MiddleContainerStyle, InnerContainerStyle } from './shared/PageContainerStyles'

export const SignIn = () => {
return <div className={TopContainerStyle}>
          <div className={MiddleContainerStyle}>
            <div className={InnerContainerStyle}>
              <BackButton />
              <div className='flex items-center justify-center flex-col'>

                <div className='w-[280px] mt-[24px] md:w-[440px] md:mt-[70px] flex items-center justify-center flex-col'>
                  <div className='flex justify-start flex-col w-full gap-3'>
                    <h1 className='text-2xl md:text-4xl font-semibold text-darkblue'>Sign In</h1>
                    <p className='text-sm text-darkgray'>Enter your email and password to sign in!</p>
                  </div>
                  <div className='flex flex-col md:flex-row gap-3 justify-center  md:justify-between w-full mt-[20px] md:mt-[32px]' >
                    <SocialLoginButton icon={googleLogo} text='Sign in with Google' className='flex justify-center items-center gap-2 w-[280px] md:w-[210px] h-[44px] bg-lightgray rounded-lg cursor-pointer' />
                    <SocialLoginButton icon={xLogo} text='Sign in with X' className='flex justify-center items-center gap-2 w-[280px] md:w-[210px] h-[44px] bg-lightgray rounded-lg cursor-pointer' />
                  </div>
                  
                  <div className='flex items-center justify-center h-[34px] my-[12px] md:my-[20px] font-normal text-xs text-mediumgray'>Or  
                  </div>

                  <div className='flex items-center justify-center flex-col gap-3 w-full'>
                    <Input placeholder='Enter your email' 
                      inputName='Email'

                       />

                    <Input placeholder='Enter your password' 
                      inputName='Password'

                      />
                  </div>
                  <div className='flex justify-between w-full my-[20px]'>
                        <Checkbox checkboxText='Keep me logged in' className='w-5 h-5 accent-brightblue rounded-full border-[1.25px] border-solid border-gray'/>
                        <a href='url' className='text-sm text-brightblue whitespace-nowrap'>Forgot password?</a>
                  </div>
                  <div className='flex items-center justify-center'>
                    <MainButton buttonText='Sign In' className='bg-brightblue 
                                flex items-center justify-center
                                text-white w-[280px] md:w-[440px] h-[44px] 
                                rounded-lg border
                                font-medium'/>
                  </div>
                  <AuthFooter text='Don’t have an account?' link='Sign Up' url='' className='flex justify-center md:justify-start items-center gap-2 w-full mt-[20px] text-sm'/>
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

