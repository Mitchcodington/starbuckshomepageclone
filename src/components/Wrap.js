import { coffee3 } from "../assets";
import  { layout } from "../style";


const Wrap = () => (
  <section className="flex  mt-[20px] font-Sans text-white sm:py-3 py-0 px-0">
    <div className="flex bg-solidPink  md:flex-row flex-col">
    <div className={`text-center flex  justify-center items-center  ${layout.sectionInfo} md:max-w-[44%]`}>
      <h2 
      className='font-bold 
      xs:text-[48px] 
      text-[40px] 
      tracking-wide
      xs:leading-[76.8px] 
      leading-[66.8px] 
      w-full'>
      Wrap your day
      </h2>

      <p className={'text-[25px] tracking-wide leading-[50.8px]  text-center  font-normal w-[90%] text-2xl mt-5'}>
      Savory ingredients come together in our Bacon, Sausage & Egg Wrap for a satisfying meal on the go.
      </p>

      <button className="font-poppins 
      font-bold 
      font-Noto-sans
      mrs-[10px]
      mt-[25px]
      py-[6px]
      px-[11px]
      rounded-[20px]
      border
      tracking-wide
      border-white
       text-[15px] ">Order now</button>
    </div>
    <div className={layout.sectionImg}>
      <img src={coffee3} alt="billing" className="w-[100%] h-[100%] " />
    </div>
    </div>

   
  </section>
);

export default Wrap;