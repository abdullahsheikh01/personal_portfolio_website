'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [barClick,setbarClick] = useState<boolean>(false);
  return (
    <header>
      <nav className="2xl:h-20 xl:h-20 lg:h-16 sm:h-20 lap:h-16 bg-[#FDC435] 
      flex items-center justify-between top-0 z-50 lmd:h-14 w-screen fixed">
      <div className="flex items-center ml-2 lg:h-16 lg:w-16 lap:h-14 lap:w-14 lmd:h-12 lmd:w-12">
        <Image
          src="/images/logo.jpg"
          alt="Logo"
          width={80}
          height={80}
        />
      </div>
      <ul className="2xl:flex xl:flex lg:hidden md:hidden sm:hidden mr-36 gap-20 text-base xl:text-2xl 
      lap:hidden lmd:hidden">
        <li><Link href="#home" className="hover:text-blue-700 font-roboto font-medium">Home</Link></li>
        <li><Link href="#about-me" className="hover:text-blue-700 font-roboto font-medium">About Me</Link></li>
        <li><Link href="#my-skills" className="hover:text-blue-700 font-roboto font-medium">My Skills</Link></li>
        <li><Link href="#my-work" className="hover:text-blue-700 font-roboto font-medium">My Work</Link></li>
        <li><Link href="https://www.linkedin.com/in/abdullah-shaikh-29699b302/"  target="_blank" className="hover:text-blue-700 font-roboto font-medium">My LinkedIn</Link></li>
        <li><Link href="#contact-me" className="hover:text-blue-700 font-roboto font-medium">Contact Me</Link></li>
      </ul>
      <div className="2xl:hidden xl:hidden mr-10">
      <button onClick={()=>setbarClick(!barClick)}>
      <i className="fa-solid fa-bars text-3xl"></i>
      </button>
      </div>
    </nav>
    <div onMouseLeave={()=>{setbarClick(!barClick)}}
    className={`${barClick===true?"bg-[#FDC435] text-2xl flex flex-col  mr-32 w-[100vw] items-center h-auto\
     pt-20 z-40 fixed":"hidden"}`}>
    <ul className="flex flex-col gap-2">
      <li><Link href="#home" className="hover:text-blue-700 font-roboto font-medium">Home</Link></li>
      <li><Link href="#about-me" className="hover:text-blue-700 font-roboto font-medium">About Me</Link></li>
      <li><Link href="#my-skills" className="hover:text-blue-700 font-roboto font-medium">My Skills</Link></li>
      <li><Link href="#my-work" className="hover:text-blue-700 font-roboto font-medium">My Work</Link></li>
      <li><Link href="https://www.linkedin.com/in/abdullah-shaikh-29699b302/"  target="_blank" className="hover:text-blue-700 font-roboto font-medium">My LinkedIn</Link></li>
      <li><Link href="#contact-me" className="hover:text-blue-700 font-roboto font-medium">Contact Me</Link></li>
    </ul>
    </div>
    </header>
  )}
