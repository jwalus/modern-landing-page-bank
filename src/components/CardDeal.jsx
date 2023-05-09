import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" />
        in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Looking for a better credit card deal? 
        It's easy! With our user-friendly platform, 
        you can compare credit card offers from top 
        providers and find the one that suits your 
        needs in just a few clicks. Say goodbye to
        complicated applications and hidden fees
        - our platform makes it simple to find the
        best card deals.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section> 
  )
}

export default CardDeal