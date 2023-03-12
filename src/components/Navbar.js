import { useState } from "react";

import { close, logo, menu,location} from "../assets";


const Navbar = () => {
  
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-white px-3 py-5 w-[100%] font-poppins flex  justify-start top-0 z-50  items-center navbar shadow-lg  md:flex  justify-start  items-center fixed   ">
      <p><img src={logo} alt="starbucks logo" className="w-[50%] h-[50%] cursor-pointer" /></p>

      <ul className="list-none max-w-[250px]  md:flex hidden justify-end items-center flex-1">
        
          <li className="font-fira font-black text-lime hover:text-darkLime cursor-pointer text-[13px]  mr-7">
            MENU
          </li>
          <li className="font-fira font-extrabold text-lime hover:text-darkLime cursor-pointer text-[13px] mr-7">
            REWARD
          </li>
          <li className="font-fira font-extrabold text-lime hover:text-darkLime cursor-pointer text-[13px] ">
            GIFT CARDS
          </li>
      </ul>
      <div className="absolute ml-[935px]   ">
      <img src={location} alt="location icon " className="location "/>
      </div>
      <ul className="list-none  md:flex hidden justify-end items-center flex-1">
       
          <li
          className="font-Sans font-extrabold text-[13px] text-lime hover:text-darkLime cursor-pointer  mr-10"
          >
            Find a store
          </li>
        
          <button class="bg-transparent border border-lime text-lime font-Sans font-medium text-[13px] hover:bg-gray-200  font-bold py-1 px-3 rounded-full mr-5">
          Sign in
          </button>
           <button class="bg-lime text-white font-normal text-[13px] font-Sans py-1 px-3 rounded-full">
           Join now
          </button>
      </ul>

      <div className=" md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex flex-col"
          } p-6 bg-white z-[50] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
         <ul className="list-none flex flex-col max-w-[250px]  ">
        
          <li className="font-Sans font-bold text-lime hover:text-darkLime cursor-pointer text-[14px]  mt-2">
            MENU
          </li>
          <li className="font-Sans font-bold text-lime hover:text-darkLime cursor-pointer text-[14px] mt-4">
            REWARD
          </li>
          <li className="font-Sans font-bold text-lime hover:text-darkLime cursor-pointer text-[14px] mt-4 ">
            GIFT CARDS
          </li>
      </ul>
      <div className="absolute ml-[630px] ">
      <img src={location} alt="location icon" />
      </div>
      
      <ul className="list-none flex flex-col ">
   
          <li
          className="font-Sans font-bold text-[16px] text-lime hover:text-darkLime cursor-pointer  mt-4"
          >
            Find a store
          </li>
          
        
          <button class="bg-transparent border border-lime text-lime font-Sans font-medium text-[13px] hover:bg-gray-200 font-bold py-1 px-3 rounded-full mt-4">
          Sign in
          </button>
          <button class="bg-lime text-white font-normal text-[13px] font-Sans py-1 px-3 rounded-full mt-4">
           Join now
          </button>
      </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;