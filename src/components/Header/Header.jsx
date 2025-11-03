import s from './Header.module.scss'
import Logo from '../Brand/Logo/Logo';
import CartButton from '../Cart/CartButton';

function Header() {
    return (
        <header className={s.header}>
            <div className='container'>

             <div className={s.row}>

                <Logo />

                <div className={s.header_menu}>
            <nav className={s.navigation}>
                <a href='/' className={`${s.link} ${s.active}`}>Home</a>
                <a href='/menu' className={s.link}>Menu</a>
                <a href='/company' className={s.link}>Company</a>
                <a href='/login' className={s.link}>Login</a>
            </nav>


            <CartButton></CartButton>

                </div>

             </div>

            </div>
        </header>
    );
}

export default Header;