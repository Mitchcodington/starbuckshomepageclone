import {coffee2} from "../assets";
import  { layout } from "../style";

const Pistachio = () => (
  <section id="home" className="flex  mt-[20px] font-Sans text-#1e3932  sm:py-0  px-0">
    <div className="flex bg-manhanter ml-0  md:flex-row flex-col ">
    <div className={`md:mt-0 mt-0  relative ${layout.sectionImgReverse}`}>
      <img src={coffee2} alt="cup of brewed coffee" 
      className="w-[95%] h-[100%] relative z-[5] md:mr-7 mr-0 w-full " />

    </div>

    <div className={`flex justify-center items-center   ${layout.sectionInfo} `}>
      <h2 className="max-w-[80%]   text-center
      font-bold xs:text-[48px] text-[40px] tracking-wide
        xs:leading-[76.8px] leading-[66.8px] w-full">
      Long walks with pistachio
      </h2>
      <p className={" text-[25px] tracking-wide leading-[30.8px]  text-center  font-medium max-w-[510px] leading-[50px] mt-5"} >
      Keep it cozy with a Pistachio Latte finished with a brown-buttery topping.
      </p>

     
    <button className="font-poppins 
      font-normal 
      mrs-[10px]
      mt-[25px]
      py-[6px]
      px-[11px]
      rounded-[20px]
      border
      tracking-wide
      border-lime
      text-#1e3932
      text-[15px]
      mb-7 ">Order Now</button>
    </div>
    </div>
    
  </section>
);

export default Pistachio;