import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    directionLeft? : boolean
    src : string
    alt : string
}

function Skill({directionLeft, src, alt}: Props) {
  return (
    <div className='group relative flex cursor-pointer' >
        <motion.img
         initial={{ 
            x: directionLeft ? -100 : 100,
            opacity: 0
         }}
         transition={{ duration: 1}}
         whileInView={{ opacity: 1, x: 0}}
         src={src}
         alt={alt}
         className='rounded-full border border-gray-500 object-cover w-[4rem] h-[4rem] 
         xl:w-[5rem] xl:h-[5rem] filter group-hover:grayscale transition duration-300 ease-in-out' 
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-[4rem] w-[4rem] md:h-[4.5rem] md:w-[4.5rem] 
        xl:w-[5rem] xl:h-[5rem] rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill