interface AuthFooterProps {
    text: string,
    link: string,
    url: string,
    className: string
}

export const AuthFooter = ({text, link, url, className}: AuthFooterProps) => {
    return <div className={className}>
        <p>{text}</p><a className='text-brightblue' href={url}>{link}</a>
    </div>
}