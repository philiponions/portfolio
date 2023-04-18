import Navbar from "../components/Navbar";
import TypeWriter from "../components/TypeWriter";
// pages/_app.js
import { Poppins } from 'next/font/google'
// import profile from '../images/profile.jpg' // relative path to image 

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})


export default function About() {
  return (
      <div className={poppins.className}>
        <div class="ml-9">
          <div class="flex space-between items-center">
            <div class="p-10">
              <h1 class="text-5xl font-extrabold">About page</h1>
              <h3 class="text-3xl">I'm Huey Gonzales,</h3>
              <h3 class="text-3xl">and I'm a</h3>
              <h3 class="text-3xl font-extrabold">Software Developer</h3> 
            </div>
            <div class="ml-16">
              <div class="">
                <img class="transform scale-125 rounded-full" height="302" width="361" src="../images/profile.jpg"/>
              </div>
            </div>        
          </div>          
        </div>
      </div>    
  )
}
