import { Raleway } from 'next/font/google'
import React from 'react'
import { useAnimation, motion } from "framer-motion";
// import {Image} from "../../public/images"

const raleway = Raleway({
    weight: '400',
    subsets: ['latin'],
  })
const raleway2 = Raleway({
    weight: '700',
    subsets: ['latin'],
})


function Project({name, desc, src, tech}) {
  return (
      <motion.div
      
        whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
            }}
        whileTap={{ scale: 0.9 }}
        >
        <div class="shadow-lg mt-5 bg-gray-100 h-80 rounded-sm cursor-pointer">
        
            <div class="bg-gray-200 h-48 overflow-hidden rounded-sm">
                {src ? <img class="object-cover scale-150" src={src}/> : <center class="text-4xl my-10">?</center>}
            </div>
            <div class="mx-5 mt-5 pb-6">
                <h1 className={raleway2.className}>{name} ({tech})</h1>
                <h2 className={raleway.className}>{desc}</h2>
            </div>
        </div>
    </motion.div>        
  )
}

export default Project