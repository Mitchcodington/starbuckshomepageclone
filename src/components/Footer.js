import styles from "../style";

import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} sm:py-10 py-6 px-9 flex-col shadow-2xl shadow-black mt-[-50px] py-9`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap text-black md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-Sans text-gray-800 text-2xl font-normal   text-[16px] leading-[27px] text-black">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-7   w-[80%]">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-Sans  text-2xl font-normal text-[15px] leading-[24px] text-gray-500 hover:text-gray-900 cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    

    <div className="w-full flex-col items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-black">
     
    <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[30px] h-[30px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
        
      </div>
      <ul id="list" className="flex flex-row md:mt-0 mt-6 text-black ">
        <li className="font-Sans font-normal text-start text-[14px] leading-[95px] mr-3 hover:underline cursor-pointer"> Privacy Notice | </li>
        <li className="font-Sans font-normal text-start text-[14px] leading-[95px] mr-3 hover:underline cursor-pointer"> Terms of Use | </li>
        <li className="font-Sans font-normal text-start text-[14px] leading-[95px] mr-3 hover:underline cursor-pointer">Do Not Share My Personal Information | </li>
        <li className="font-Sans font-normal text-start text-[14px] leading-[95px] mr-3 hover:underline cursor-pointer">CA Supply Chain Act | </li>
        <li className="font-Sans font-normal text-start text-[14px] leading-[95px] mr-3 hover:underline cursor-pointer">Cookie Preferences</li>
       

      </ul>
      <p className="font-Sans font-normal text-start text-[13px] leading-[18px] text-gray-500 mt-4">
      © 2023 Starbucks Coffee Company. All rights reserved.
      </p>

     
    </div>
  </section>
);

export default Footer;