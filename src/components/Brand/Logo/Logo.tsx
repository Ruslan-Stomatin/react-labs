import logoSrc from '@/assets/icons/logo_app.svg'

function Logo() {
    return (
        <a href='/'>
        <img src={logoSrc} alt='Company Logo'></img>
        </a>
    )
}

export default Logo;