import {couple} from "../assets";
import { layout } from "../style";

const Hero = () => (
  <section 
  className={`flex bg-iceCold 
  mt-[110px] 
  text-#006241 
  sm:py-3 py-0
  md:flex-row 
  flex-col mt-0`}>
    
    <div className={`mt-0 ${layout.sectionImgReverse}`} >
      <img src={couple} alt="couple smile at eachother with coffee in their hand" 
      className="w-[100%] h-[100%] object-cover relative z-[5]" />
    </div>

    <div className={`md: px-[15px] ${layout.sectionInfo}`}>
      <h2 className="font-Sans tracking-wide font-semibold text-[23px] ">
      A new way to earn sips and trips
      </h2>

      <h2 className="font-Sans tracking-wide font-normal text-#1e3932 text-[18px] leading-[30.8px] w-[95%] mt-2">
      Now you can link your Starbucks® Rewards + Delta<br/> SkyMiles® accounts to get:
      </h2>

     <div>
      <ul className=" list-disc 
       font-Sans
       font-normal
       text-[16px] 
       max-w-[500px]
       ml-[30px] 
       leading-[50.8px] 
       mt-[20px]">
      <li className="tracking-wide">Double Stars on Delta travel days</li>
      <li className="leading-[30.8px] tracking-wide">1 mile per $1 spent at Starbucks (excludes taxes and gratuities)*</li>
      </ul>
    </div>  

   <button 
   className="font-poppins 
   font-bold 
   font-Sans
   tracking-wide
   mrs-[10px]
   mt-[30px]
   py-[6px]
   px-[11px]
   rounded-[20px]
   border
   border-darkLime
   text-[15px] mb-4 ">Link accounts</button>
   </div> 
  </section>
);

export default Hero;


