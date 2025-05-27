interface SocialLoginProps {
    icon: string,
    text: string,
    className: string
}
export const SocialLoginButton = ({icon, text, className}: SocialLoginProps) => {
return <button className={className}>
          <img src={icon} />
          {text}
      </button>
}

