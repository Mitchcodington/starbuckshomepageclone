import styles from "../style";


const Teams = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} text-#006241  `}>
    <div className="mb-7">
     
      <p className={`font-Sans text-[12px] tracking-wide leading-[30.8px] mt-[-3px] text-center text-black max-w-[600px] 
      md:mt-[-50px] mt-0`}>
      *Excludes taxes and gratuities. At participating stores. 
      Some restrictions apply. Flights purchased close to departure
       may not earn double Stars. Stars and miles may not be earned
        on purchases of alcohol, Starbucks Cards and Starbucks Card
         reloads. For details, visit<br/> <span className='underline'>
<a href="deltastarbucks.com/terms" target="_blank">http://deltastarbucks.com/terms.</a></span>
      </p>
    </div>
  </section>
);

export default Teams;