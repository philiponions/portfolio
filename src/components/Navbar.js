import TypeWriter from "./TypeWriter";
// pages/_app.js
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
})


export default function Navbar() {
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
            <div class="mr-5">
            <ul class="flex text-white ml-13 items-center">                
                  <a target="_blank" href="https://www.linkedin.com/in/huey-gonzales-30bab7228/" class="ml-16 opacity-100 transition duration-300 ease-in-out hover:opacity-50">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.4286 0H3.57143C1.6 0 0 1.6 0 3.57143V26.4286C0 28.4 1.6 30 3.57143 30H26.4286C28.4 30 30 28.4 30 26.4286V3.57143C30 1.6 28.4 0 26.4286 0ZM9.28571 11.4286V25H5V11.4286H9.28571ZM5 7.47857C5 6.47857 5.85714 5.71429 7.14286 5.71429C8.42857 5.71429 9.23571 6.47857 9.28571 7.47857C9.28571 8.47857 8.48571 9.28571 7.14286 9.28571C5.85714 9.28571 5 8.47857 5 7.47857ZM25 25H20.7143C20.7143 25 20.7143 18.3857 20.7143 17.8571C20.7143 16.4286 20 15 18.2143 14.9714H18.1571C16.4286 14.9714 15.7143 16.4429 15.7143 17.8571C15.7143 18.5071 15.7143 25 15.7143 25H11.4286V11.4286H15.7143V13.2571C15.7143 13.2571 17.0929 11.4286 19.8643 11.4286C22.7 11.4286 25 13.3786 25 17.3286V25Z" fill="white"/></svg>    
                  </a>                                   
                  <a target="_blank" href="https://github.com/philiponions" class="ml-16 opacity-100 transition duration-300 ease-in-out hover:opacity-50">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.71625 0 0 6.71625 0 15C0 22.0288 4.84 27.91 11.365 29.5375C11.295 29.335 11.25 29.1 11.25 28.8088V26.245C10.6413 26.245 9.62125 26.245 9.365 26.245C8.33875 26.245 7.42625 25.8037 6.98375 24.9837C6.4925 24.0725 6.4075 22.6788 5.19 21.8263C4.82875 21.5425 5.10375 21.2188 5.52 21.2625C6.28875 21.48 6.92625 22.0075 7.52625 22.79C8.12375 23.5738 8.405 23.7512 9.52125 23.7512C10.0625 23.7512 10.8725 23.72 11.635 23.6C12.045 22.5587 12.7537 21.6 13.62 21.1475C8.625 20.6337 6.24125 18.1487 6.24125 14.775C6.24125 13.3225 6.86 11.9175 7.91125 10.7337C7.56625 9.55875 7.1325 7.1625 8.04375 6.25C10.2913 6.25 11.65 7.7075 11.9763 8.10125C13.0963 7.7175 14.3262 7.5 15.6187 7.5C16.9137 7.5 18.1487 7.7175 19.2712 8.10375C19.5937 7.7125 20.9538 6.25 23.2063 6.25C24.1213 7.16375 23.6825 9.57 23.3337 10.7425C24.3787 11.9237 24.9938 13.325 24.9938 14.775C24.9938 18.1462 22.6137 20.63 17.6262 21.1462C18.9987 21.8625 20 23.875 20 25.3912V28.8088C20 28.9388 19.9713 29.0325 19.9563 29.1438C25.8013 27.095 30 21.545 30 15C30 6.71625 23.2837 0 15 0Z" fill="white"/></svg>
                  </a>                                                               
                  <a target="_blank" href="https://www.youtube.com/@hueygonzales262" class="ml-16 opacity-100 transition duration-300 ease-in-out hover:opacity-50">
                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.1068 4.125C30.8109 2.47559 29.4015 1.27441 27.7658 0.899414C25.3181 0.375 20.7881 0 15.8869 0C10.9886 0 6.38608 0.375 3.93547 0.899414C2.3027 1.27441 0.890339 2.39941 0.594526 4.125C0.295813 6 0 8.625 0 12C0 15.375 0.295813 18 0.66703 19.875C0.965742 21.5244 2.3752 22.7256 4.00798 23.1006C6.60649 23.625 11.0611 24 15.9623 24C20.8635 24 25.3181 23.625 27.9166 23.1006C29.5494 22.7256 30.9589 21.6006 31.2576 19.875C31.5534 18 31.9246 15.2988 32 12C31.8492 8.625 31.478 6 31.1068 4.125ZM11.8789 17.25V6.75L20.936 12L11.8789 17.25Z" fill="white"/></svg>
                  </a>                                                
              </ul>
            </div>
            <Burger/>
          </div>
        </div>
      </nav>    
  )
}
