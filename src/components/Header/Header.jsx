import { NavLink } from "react-router-dom";
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
      <NavLink
        to="/" className={({ isActive }) =>
          `${s.link} ${isActive ? s.active : ""}`}>
        Home
      </NavLink>

      <NavLink
        to="/menu" className={({ isActive }) =>
          `${s.link} ${isActive ? s.active : ""}`}>
        Menu
      </NavLink>

      <NavLink
        to="/company" className={({ isActive }) =>
          `${s.link} ${isActive ? s.active : ""}`}>
        Company
      </NavLink>

      <NavLink
        to="/login" className={({ isActive }) =>
          `${s.link} ${isActive ? s.active : ""}`}>
        Login
      </NavLink>
    </nav>
            
            <CartButton></CartButton>

                </div>

            </div>

            </div>
        </header>
    );
}

export default Header;