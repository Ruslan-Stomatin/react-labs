import logoSrc from '@/assets/icons/logo_app.svg'
import s from './Logo.module.scss'

function Logo() {
    return (
        <a href='/' className={s.logo}>
        <img src={logoSrc} alt='Company Logo'></img>
        </a>
    )
}

export default Logo;