interface AuthFooterProps {
    text: string,
    link: string,
    url: string
}

export const AuthFooter = ({text, link, url}: AuthFooterProps) => {
    return <div className='flex justify-center md:justify-start items-center gap-2 w-full mt-[20px] text-sm'>
        <p>{text}</p><a className='text-[#465FFF]' href={url}>{link}</a>
    </div>
}