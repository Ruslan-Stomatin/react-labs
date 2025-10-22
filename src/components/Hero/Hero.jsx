import s from './Hero.module.scss'
import Commercial from '@/assets/images/Delivery_home.png'
import HomeBtn from '@/components/UI/Button/Button'


function Hero() {
    return (
        <section className={s.hero}>

            <div className='container'>

            <div className={s.row}>
                <div className={s.left}>
            <h1 className={s.title}>
            Beautiful food &<br/>
            takeaway, <span className={s.accent}>delivered</span><br/>
            to your door.
            </h1>

            <p className={s.subtitle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
            </p>

            <HomeBtn className={s.Home_button}>
                <p className={s.btnText}>Place an Order</p>
            </HomeBtn>

            <div className={s.rating}> 
                <div className={s.rating_description}>
                <span className={s.star}>★</span>
                <span className={s.trust}>Trustpilot</span>
                </div>

              <span className={s.score}> <span className={s.highlight}>4.8 out of 5</span> based on 2000+ reviews</span>
            </div>
          </div>


            <div className={s.right}>
                <img src={Commercial} alt="" />
            </div>
                    
                </div>
                
            </div>
        </section>
    )
} 

export default Hero;