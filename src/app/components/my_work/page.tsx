'use client';
import Link from "next/link";
import { useState } from "react";
export default function MyWork(){
    const [work1,setWork1] = useState(false);
    const [work2,setWork2] = useState(false);
    const [work3,setWork3] = useState(false);
    const [work4,setWork4] = useState(false);
   return( <div className="flex flex-col items-center 2xl:mt-32 xl:mt-20 lg:mt-20 sm:mt-24 
   lap:mt-14  lmd:mt-10" id="my-work">
        <h1 className="font-roboto text-7xl font-extrabold lap:text-6xl  lmd:text-6xl">My Work</h1>
        <div className="xl:mt-6">
            <div className="flex 2xl:flex-row gap-16 mt-8 sm:flex-col lap:flex-col lmd:flex-col lmd:items-center">
                <Link href="https://css-linear-gradient-generator-6601.vercel.app/" target="_blank">
                <div className="bg-[url('/images/work_1.jpg')] bg-cover bg-center h-[190px] w-[410px] 
                lap:h-[170px] lap:w-[390px] lmd:h-[140px] lmd:w-[360px] lap:ml-2 lap:mr-2" 
                onMouseEnter={()=>{setWork1(true)}}onMouseLeave={()=>{setWork1(false)}}>
                    <div className={`${work1===true?"flex flex-col bg-gray-600 h-full":"hidden"}`}>
                    <h3 className="font-roboto text-center text-white text-[27px] mt-3">
                        CSS Linear Gradient Generator
                    </h3>
                    <p className="font-roboto text-white ml-5 mr-5 leading-relaxed">
                        This is my CSS linear Gradient Generator website link
                        which changes gradient
                        by one click also change of one side and enables to select 
                        directions and also give its code which showcasing my logics with
                        HTML, CSS, JS.
                    </p>
                    </div>
                </div></Link>
                <Link href="https://harmony-valley-school-6601.vercel.app/" target="_blank">
                <div className={`bg-[url('/images/work_2.jpg')] bg-cover bg-center 
                h-[190px] w-[410px] lap:h-[170px] lap:w-[390px] lmd:h-[140px] lmd:w-[360px] lap:ml-2 lap:mr-2`} 
                onMouseEnter={()=>{setWork2(true)}}
                onMouseLeave={()=>{setWork2(false)}}>
                    <div className={`${work2===true?"flex flex-col bg-gray-600 h-full":"hidden"}`}>
                    <h3 className="font-roboto text-center text-white text-[27px] mt-3">
                        A school Website
                    </h3>
                    <p className="font-roboto text-white ml-5 mr-5 leading-relaxed">
                        This is my complete front-end school Website link which 
                        visualize the needs of
                        a school website by including sections like Home, About Us,
                        Programs, Contact and Social Media
                        which showcasing my Front-end Skills.
                    </p>
                    </div>
                </div>
                </Link>
            </div>
            <div className="flex 2xl:flex-row gap-16 mt-8 sm:flex-col lap:flex-col lmd:flex-col">
                <Link href="https://www.npmjs.com/~abdullahsheikh6601">
                <div className="bg-[url('/images/work_3.jpg')] bg-cover bg-center 
                h-[190px] w-[410px] lap:h-[170px] lap:w-[390px] lap:ml-2 lap:mr-2 lmd:h-[140px] lmd:w-[360px]" 
                onMouseEnter={()=>{setWork3(true)}}
                onMouseLeave={()=>{setWork3(false)}}>
                     <div className={`${work3===true?"flex flex-col bg-gray-600 h-full":"hidden"}`}>
                    <h3 className="font-roboto text-center text-white text-[27px] mt-3">
                        NPM Projects
                    </h3>
                    <p className="font-roboto text-white ml-5 mr-5 leading-relaxed mt-2">
                        By Clicking this you will be see my NPM Projects Repo
                        Where are my 7 cmd packages which shows my logics and expertise
                        in Node.js based cmd projects and also you can use them.
                    </p>
                    </div>
                </div>
                </Link>
                <Link href="https://todo-app-6601.vercel.app/" target="_blank">
                <div className="bg-[url('/images/work_4.jpg')] bg-cover bg-center 
                h-[190px] w-[410px] lap:h-[170px] lap:w-[390px] lmd:h-[140px] lmd:w-[360px] lap:ml-2 lap:mr-2"
                 onMouseEnter={()=>{setWork4(true)}}
                onMouseLeave={()=>{setWork4(false)}}>
                    <div className={`${work4===true?"flex flex-col bg-gray-600 h-full":"hidden"}`}>
                    <h3 className="font-roboto text-center text-white text-[27px] mt-3">
                        Todo Web App
                    </h3>
                    <p className="font-roboto text-white ml-5 mr-5 leading-relaxed">
                    This is To-Do Web Link that app allows users to manage tasks efficiently with both 
                    Light and Dark themes. Built with Next.js and styled using Tailwind 
                    CSS, the app features dynamic theme switching, task addition, 
                    viewing, and deletion.
                    </p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </div>)
}