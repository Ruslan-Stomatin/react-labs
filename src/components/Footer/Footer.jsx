import s from './Footer.module.scss'
import BgrFooter from '@/assets/images/Delivery_footer.png'
import Logo from '@/assets/icons/logo_app.svg'
import Instagram from '@/assets/icons/Instagram.svg'
import YouTube from '@/assets/icons/YouTube.svg'
import Twitter from '@/assets/icons/Twitter.svg'

function Footer() {
    return (
       <footer className={s.footer}>

      <div className={s.bg} style={{ ['--footer-bg']: `url(${BgrFooter})` }} />

    <div className="container">

        <div className={s.top}>
          <div className={s.brand}>
            <img src={Logo} alt="Company logo" className={s.logo} />
            <p className={s.desc}>
              Takeaway & Delivery template<br/>for small – medium businesses.
            </p>
          </div>

          <nav className={s.cols}>
            <div className={s.col}>
              <h4 className={s.head}>Company</h4>
              <a href="/home">Home</a>
              <a href="/order">Order</a>
              <a href="/faq">FAQ</a>
              <a href="/contact">Contact</a>
            </div>

            <div className={s.col}>
              <h4 className={s.head}>Template</h4>
              <a href="/style-guide">Style Guide</a>
              <a href="/changelog">Changelog</a>
              <a href="/licence">Licence</a>
              <a href="/university">Webflow University</a>
            </div>

            <div className={s.col}>
              <h4 className={s.head}>Flowbase</h4>
              <a href="/clonables">More Cloneables</a>
            </div>
          </nav>
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