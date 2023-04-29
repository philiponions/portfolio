import React from 'react'
import {CiMenuBurger} from "react-icons/ci"

function Burger(props) {
  return (
    <div className='text-white items-center opacity-100 transition duration-300 ease-in-out hover:opacity-50 cursor-pointer'>      
        <CiMenuBurger size={24} onClick={() => props.setIsOpen(!props.isOpen)}/>
    </div>
  )
}

export default Burger