export const ThemeButton = () => {
    let themeButtonIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.24658 6.085C5.24658 9.76779 8.23208 12.7533 11.9149 12.7533C13.6684 12.7533 15.2639 12.0764 16.4542 10.9698C15.5838 14.2728 12.5762 16.7084 8.99984 16.7084C4.74264 16.7084 1.2915 13.2572 1.2915 9.00004C1.2915 5.42363 3.72712 2.4161 7.03012 1.54565C5.92343 2.73601 5.24658 4.33146 5.24658 6.085Z" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    return <button className='
    absolute 
    right-[20px] bottom-[20px]
    md:right-[24px] md:bottom-[24px] 
    flex justify-center items-center 
    rounded-full 
    w-[52px] h-[52px] 
    bg-[#465FFF]'>{themeButtonIcon}</button>
}