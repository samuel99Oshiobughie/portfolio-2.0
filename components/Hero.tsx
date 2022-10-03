import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
   const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Sam ",
            "I love to write" ,
            "<EFFICIENT CODE />", 
        ],
        loop: true,
        delaySpeed: 2000,
   });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img 
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src='/sam.png'
        alt="sam photo"
        />
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
            <h1 className="text-3xl lg:text-4xl font-semibold px-10">
                <span className="mr-3 text-[30px]">{text}</span>
                <Cursor cursorColor='#6c9ce0'/>
            </h1>
            <div className="pt-2 space-x-5">
                <Link href="#about">
                <button className='heroButton'>About</button>
                </Link>
                {/* <Link href="#experience">
                <button className='heroButton'>Experience</button>
                </Link> */}
                <Link href="#skills">
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  );
}

 