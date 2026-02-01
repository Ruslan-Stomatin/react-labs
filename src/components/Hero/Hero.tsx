import { Link } from "react-router-dom";
import s from "./Hero.module.scss";
import Commercial from "@/assets/images/Delivery_home.png";
import HomeBtn from "@/components/UI/Button/Button";

import { useLang } from "@/hooks/useLang";
import { t } from "@/config/translations";

function Hero() {
  const { lang } = useLang();

  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.row}>
          <div className={s.left}>
            <h1 className={s.title}>
              {t(lang, "heroTitle1")} <br />
              <span className={s.accent}>{t(lang, "heroTitle2")}</span>
              <br />
              {t(lang, "heroTitle3")}
            </h1>

            <p className={s.subtitle}>{t(lang, "heroText")}</p>

            <Link to="/order">
              <HomeBtn className={s.Home_button}>
                <p className={s.btnText}>{t(lang, "heroCta")}</p>
              </HomeBtn>
            </Link>

            <div className={s.rating}>
              <div className={s.rating_description}>
                <span className={s.star}>★</span>
                <span className={s.trust}>{t(lang, "trustpilot")}</span>
              </div>

              <span className={s.score}>
              <span className={s.highlight}>{t(lang, "ratingValue")}</span>{" "}
                {t(lang, "ratingSuffix")}
              </span>

            </div>
          </div>
          <div className={s.right}>
            <img src={Commercial} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
