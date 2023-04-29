import { useEffect, useState } from "react";
import Burger from "./Burger";
import Icons from "./Icons";
import TypeWriter from "./TypeWriter";
// pages/_app.js
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
})


export default function Navbar() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsLargeScreen(false);
      } else {
        setIsLargeScreen(true);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <nav class="bg-black p-5">
        <div class="flex justify-between ">   
          <div class="text-white flex items-center">
            <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.4 25C1.76 25 1.2 24.7656 0.72 24.2969C0.24 23.8281 0 23.2812 0 22.6562V2.34375C0 1.71875 0.24 1.17188 0.72 0.703125C1.2 0.234375 1.76 0 2.4 0H29.6C30.24 0 30.8 0.234375 31.28 0.703125C31.76 1.17188 32 1.71875 32 2.34375V22.6562C32 23.2812 31.76 23.8281 31.28 24.2969C30.8 24.7656 30.24 25 29.6 25H2.4ZM2.4 22.6562H29.6V5.625H2.4V22.6562ZM8.8 19.8438L7.12 18.2031L11.24 14.1406L7.08 10.0781L8.8 8.4375L14.64 14.1406L8.8 19.8438ZM16.4 20V17.6562H25.2V20H16.4Z" fill="white"/></svg>
            <div class="ml-3"></div>
              <TypeWriter words={["Huey Gonzales"]} blinkType={"_"}/>
          </div>
          <div class="flex">
            <div className={raleway.className}>
              <ul class="flex text-white">
                <li>
                  
                  <a href="#section-2" class="py-2 pl-3 pr-4 opacity-100 transition duration-300 ease-in-out hover:opacity-50">About</a>
                </li>
                <li>
                  <a href="#section-3" class="py-2 pl-3 pr-4 opacity-100 transition duration-300 ease-in-out hover:opacity-50">Projects</a>
                </li>
                <li>
                  <a href="#section-3" class="py-2 pl-3 pr-4 opacity-100 transition duration-300 ease-in-out hover:opacity-50">Contact</a>           
                </li>
              </ul>
            </div>            
              {isLargeScreen ? <Icons/> : <Burger/>}                                                      
          </div>
        </div>
      </nav>    
  )
}
