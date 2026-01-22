import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import Logo from "../Brand/Logo/Logo";
import CartButton from "../Cart/CartButton";

import { useTheme } from "@/hooks/useTheme";
import { useLang } from "@/hooks/useLang";
import { t } from "@/config/translations";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLang();

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
                {t(lang, "navHome")}
              </NavLink>

              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `${s.headerLink} ${isActive ? s.headerLinkActive : ""}`
                }
              >
                {t(lang, "navMenu")}
              </NavLink>

              <NavLink
                to="/company"
                className={({ isActive }) =>
                  `${s.headerLink} ${isActive ? s.headerLinkActive : ""}`
                }
              >
                {t(lang, "navCompany")}
              </NavLink>

              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${s.headerLink} ${isActive ? s.headerLinkActive : ""}`
                }
              >
                {t(lang, "navLogin")}
              </NavLink>
            </nav>

            <select className={s.headerLangBtn}
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              aria-label="Language"
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="lt">LT</option>
            </select>

            <button onClick={toggleTheme} className={s.headerThemeBtn}>
              <span className={s.label}>{theme === "dark" ? "☾" : "☀"}</span>
            </button>

            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
