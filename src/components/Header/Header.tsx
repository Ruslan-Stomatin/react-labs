import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import Logo from "../Brand/Logo/Logo";
import CartButton from "../Cart/CartButton";
import { useTheme } from "@/hooks/useTheme";
import Button from "../UI/Button/Button";

function Header() {

  
const { theme, toggleTheme } = useTheme();

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerRow}>
          <Logo />

  

          <div className={s.headerMenu}>
            <nav className={s.headerNav}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${s.headerLink} ${isActive ? s.headerLinkActive : ""}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `${s.headerLink} ${isActive ? s.headerLinkActive : ""}`
                }
              >
                Menu
              </NavLink>

              <NavLink
                to="/company"
                className={({ isActive }) =>
                  `${s.headerLink} ${isActive ? s.headerLinkActive : ""}`
                }
              >
                Company
              </NavLink>

              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${s.headerLink} ${isActive ? s.headerLinkActive : ""}`
                }
              >
                Login
              </NavLink>
            </nav>

            <button onClick={toggleTheme} className={s.headerThemeBtn}>
            <span className={s.label}>
              {theme === "dark" ? "☾" : "☀"}
            </span>
            </button>


            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
