import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '../data/info';

type Props = {}

function Projects({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-0'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20'>
            {projects.map(({src, alt, href}, i)=> (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-4
                items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                        initial={{ 
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src={src} 
                        alt={alt} 
                        className='md:h-[200px] h-[150px]'
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-2xl font-semibold text-center flex flex-row space-x-5'>
                            <span className='underline decoration-[#6c9ce0]/50'> 
                                Case Study {i + 1} of {projects.length}:
                            </span>{" "} 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>

                        </h4>

                        {/* <p className='text-lg text-center md:textleft'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, ducimus odit. Rem at, consequatur quidem ab quod quae amet error nihil minus nulla sit.
                        </p> */}
                    </div>
                    <Link href={href}>
                     <button className='linkButton'>Live Project</button>
                    </Link>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#6c9ce0]/10 left-0 h-[300px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects