import s from './Header.module.scss'
import Logo from '@/assets/icons/logo_app.svg'
import Button from '../UI/Button/Button';
import CartIcon from '@/assets/icons/Cart.svg'

function Header() {
    return (
        <header className={s.header}>
            <div className='container'>

             <div className={s.row}>

            <a href='/' className={s.logo}>
            <img src={Logo} alt='Company Logo'></img>
            </a>

                <div className={s.header_menu}>
            <nav className={s.navigation}>
                <a href='/' className={`${s.link} ${s.active}`}>Home</a>
                <a href='/menu' className={s.link}>Menu</a>
                <a href='/company' className={s.link}>Company</a>
                <a href='/login' className={s.link}>Login</a>
            </nav>

            <div className={s.cartWrap}>
            <Button className={s.big} >
                 <img src={CartIcon} alt="" className={s.cart} aria-hidden />
            </Button>
            </div>

                </div>

             </div>

            </div>
        </header>
    );
}

export default Header;