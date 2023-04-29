import React from 'react'
import {CiMenuBurger} from "react-icons/ci"

function Burger() {
  return (
    <div className='text-white items-center opacity-100 transition duration-300 ease-in-out hover:opacity-50 cursor-pointer'>      
        <CiMenuBurger size={24}/>
    </div>
  )
}

export default Burger