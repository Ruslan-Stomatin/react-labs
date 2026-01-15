import s from './Footer.module.scss'
import BgrFooter from '@/assets/images/Delivery_footer.png'
import Instagram from '@/assets/icons/Instagram.svg'
import YouTube from '@/assets/icons/YouTube.svg'
import Twitter from '@/assets/icons/Twitter.svg'
import Logo from '@/components/Brand/Logo/Logo'
import { footerCols } from '@/config/FooterNav'

function Footer() {
    return (
       <footer className={s.footer}>

      <div className={s.bg} style={{ ['--footer-bg' as any]: `url(${BgrFooter})` }} />

    <div className="container">
        <div className={s.top}>
          <div className={s.brand}>
            <Logo />
            <p className={s.desc}>
              Takeaway & Delivery template<br/>for small – medium businesses.
            </p>
          </div>

          <div className={s.cols}>
            {footerCols.map((col) => (
              <div key={col.title} className={s.col}>
                <h4 className={s.head}>{col.title}</h4>
                <nav>
                  {col.links.map((link) => (
                    <a key={link.to} href={link.to}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className={s.bottom}>
          <p className={s.copy}>
            Built by <a href="https://flowbase.co" target="_blank" rel="noreferrer">Flowbase</a> •
            &nbsp;Powered by <a href="https://webflow.com" target="_blank" rel="noreferrer">Webflow</a>
          </p>

 <ul className={s.social}>
            <li>
              <a href="https://www.instagram.com/">
                <img src={Instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://x.com/">
                <img src={Twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <img src={YouTube} alt="YouTube" />
              </a>
            </li>
          </ul>
        </div>

    </div>
    </footer>
    )
}

export default Footer;