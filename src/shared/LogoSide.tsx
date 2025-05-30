import { ThemeButton } from "./ThemeButton"
import tailAdminLogo from "../assets/TailAdminLogo.svg"
import topSquares from "../assets/TopSquares.svg"
import bottomSquares from "../assets/BottomSquares.svg"

export const LogoSide = () => {
   
  return <div className='hidden md:relative md:flex md:justify-center md:items-center md:bg-[#161950] md:w-[705px] md:h-full'>
        <div className='flex flex-col justify-center items-center gap-3 w-[293.35px]'>
          <img src={tailAdminLogo}/>

            <p className='text-sm text-center text-[#FFFFFF99]'>Free and Open-Source Tailwind CSS Admin Dashboard Template</p>
        </div>
        <img src={topSquares} className='absolute top-0 right-0'/>
        <img src={bottomSquares} className='absolute bottom-0 right-[255px]'/>
        
        <ThemeButton/>
    </div>
}