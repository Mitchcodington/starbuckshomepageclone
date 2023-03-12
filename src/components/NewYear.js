import { coffee1 } from "../assets";
import { layout } from "../style";


const NewYear = () => (
  <section className="flex  mt-[20px] font-Sans  sm:py-3 py-0 px-0">
    <div className="flex bg-armyGreen  md:flex-row flex-col">
    <div className={`text-center flex w-[100%]  justify-center items-center  
    ${layout.sectionInfo} md:max-w-[44%]`}>

      <h2 className=" text-center
      font-bold 
      xs:text-[48px] 
      text-[40px] 
      text-white 
      xs:leading-[76.8px] 
      leading-[66.8px] 
      tracking-wide
      w-full">
      New year, cool <br/>new brew
      </h2>
      <p className={" text-[21px] tracking-wide leading-[30.8px] font-Work  text-white font-bold max-w-[410px] mt-5"}>
      Introducing Pistachio Cream Cold Brew —bold, smooth coffee topped with pistachio cream cold foam.
      </p>

      <button className="font-Sans
      font-bold 
      font-Sans
      mrs-[10px]
      mt-[25px]
      py-[6px]
      px-[11px]
      tracking-wide
      rounded-[20px]
      border
      border-white
      text-white
      text-[15px] ">Try it now</button>
    </div>

    <div className={layout.sectionImg}>
      <img src={coffee1} alt="cup of coffee" className="w-[100%] h-[100%] " />
    </div>
    </div>
  </section>
);

export default NewYear;