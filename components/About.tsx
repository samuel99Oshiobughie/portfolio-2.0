import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:1.5 }}
        className="flex flex-col relative h-screen  text-center md:text-left md:flex-row 
        max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-[6rem] uppercase tracking-[20px] text-gray-500 text-2xl ">About</h3>
       
        <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{opacity: 1, x: 0}}
            viewport={{ once: true}}
            src="/supreme.png"
            className="-mb-[10rem] md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-[25rem] xl:w-[350px] xl:h-[350px]"
        />

        <div className='space-y-[2rem] h-[3rem] mt-6 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold '>
                Here is a {" "}
                <span className='underline decoration-[#6c9ce0]/50'>little</span>{" "} 
                background
            </h4>
            <p className='text-base '>
                I&#39m sam, a software engineer.I build interactive and optimised websites that are responsive on all platforms.
                I try to leave every piece of code I touch better than I met it.
            </p>
        </div>
        
    </motion.div>
  )
}

export default About