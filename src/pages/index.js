import Navbar from "../components/Navbar";
import Home from "../pages/home.js";
import TypeWriter from "../components/TypeWriter";
// pages/_app.js
import { Poppins } from 'next/font/google'
import Menu from "@/components/Menu";
// import profile from '../images/profile.jpg' // relative path to image 

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})


export default function Index() {
  return (
    <div>
     <Navbar/>      
      <Home/>
    </div>
  )
}
