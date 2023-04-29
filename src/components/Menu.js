import React, { useState } from 'react'
import { motion } from "framer-motion"


function Menu(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }
  return (
      <motion.nav
      animate={props.isOpen ? "open" : "closed"}
      variants={variants}
    >
    <div className='bg-black bg-opacity-75 h-screen text-white p-10 text-center text-xl block md:hidden' >
      <div className='mt-10 transition duration-300 ease-in-out hover:opacity-50 cursor-pointer'>About</div>
            <div className='mt-10 transition duration-300 ease-in-out hover:opacity-50 cursor-pointer'>Projects</div>
            <div className='mt-10 transition duration-300 ease-in-out hover:opacity-50 cursor-pointer'>Contact</div>
            <div className='mt-10 transition duration-300 ease-in-out hover:opacity-50 cursor-pointer'>GitHub</div>
            <div className='mt-10 transition duration-300 ease-in-out hover:opacity-50 cursor-pointer'>LinkedIn</div>
      <div className='mt-10 transition duration-300 ease-in-out hover:opacity-50 cursor-pointer'>Youtube</div>
    </div>
    </motion.nav>
  )
}

export default Menu