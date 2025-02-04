'use client';
import Link from "next/link";
import { useState } from "react";
export default function MyWork(){
    const [work1,setWork1] = useState(false);
    const [work2,setWork2] = useState(false);
    const [work3,setWork3] = useState(false);
    const [work4,setWork4] = useState(false);
    const [work5,setWork5] = useState(false);
    const [work6,setWork6] = useState(false);
   return( <div className="flex flex-col items-center pt-24 mb-6" id="my-work">
        <h1 className="font-roboto text-7xl font-extrabold lap:text-6xl  lmd:text-6xl">My Work</h1>
        <div className="xl:mt-6">
            <div className="grid 2xl:grid-cols-2 gap-16 mt-8 sm:grid-cols-1 lap:grid-cols-1 lmd:grid-cols-1 lmd:items-center xl:grid-cols-2">
            <Link href="https://market-place-builder-hackathon-2025-giaic-6601.vercel.app/" target="_blank">
                <div className="bg-[url('/images/work_5.png')] bg-cover bg-center 
                h-[190px] w-[410px] lap:h-[170px] lap:w-[390px] lmd:h-[130px] lmd:w-[350px]
                lmd:ml-1 lap:ml-2 lap:mr-2 border-2 border-black"
                 onMouseEnter={()=>{setWork5(true)}}
                onMouseLeave={()=>{setWork5(false)}}>
                    <div className={`${work5===true?"flex flex-col bg-gray-600 h-full":"hidden"}`}>
                    <h3 className="font-roboto text-center text-white text-[27px] mt-3">
                        Ecommerce Store
                    </h3>
                    <p className="font-roboto text-white ml-5 mr-5 leading-relaxed sm:hidden lap:hidden
                    lmd:hidden">
                    A fully Responsive Ecommerce Store of chairs. By clicking a 
                    single products get a product detail page and website also have add to 
                    cart 
                    functionality. Technology Used:Next.js, TSX, Tailwind CSS, Sanity 
                    and Redux Toolkit. 
                    </p>
                    </div>
                </div>
                </Link>
                <Link href="https://blogswebsitebyabdullahshaikh-6601.vercel.app/" target="_blank">
                <div className="bg-[url('/images/work_6.png')] bg-cover bg-center 
                h-[190px] w-[410px] lap:h-[170px] lap:w-[390px] lmd:h-[130px] lmd:w-[350px]
                lmd:ml-1 lap:ml-2 lap:mr-2 border-2 border-black"
                 onMouseEnter={()=>{setWork6(true)}}
                onMouseLeave={()=>{setWork6(false)}}>
                    <div className={`${work6===true?"flex flex-col bg-gray-600 h-full":"hidden"}`}>
                    <h3 className="font-roboto text-center text-white text-[27px] mt-3">
                        A Blog Website
                    </h3>
                    <p className="font-roboto text-white ml-5 mr-5 leading-relaxed sm:hidden lap:hidden
                    lmd:hidden">
                    A fully Responsive Blog Website made by Next.js, TSX, Tailwind CSS and 
                    Sanity which has Home Page, Blogs Page and Contact Page. By clicking on
                    a single blog a detailed blog page is open. 
                    </p>
                    </div>
                </div>
                </Link>
                <Link href="https://css-linear-gradient-generator-6601.vercel.app/" target="_blank">
                <div className="bg-[url('/images/work_1.jpg')] bg-cover bg-center h-[190px] w-[410px] 
                lap:h-[170px] lap:w-[390px] lmd:h-[130px] lmd:w-[350px]
                lmd:ml-1 lap:ml-2 lap:mr-2 border-2 border-black" 
                onMouseEnter={()=>{setWork1(true)}}onMouseLeave={()=>{setWork1(false)}}>
                    <div className={`${work1===true?"flex flex-col bg-gray-600 h-full":"hidden"}`}>
                    <h3 className="font-roboto text-center text-white text-[27px] mt-3">
                        CSS Linear Gradient Generator
                    </h3>
                    <p className="font-roboto text-white ml-5 mr-5 leading-relaxed sm:hidden lap:hidden
                    lmd:hidden">
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
                h-[190px] w-[410px] lap:h-[170px] lap:w-[390px] lmd:h-[130px] lmd:w-[350px]
                lmd:ml-1 lap:ml-2 lap:mr-2 border-2 border-black`} 
                onMouseEnter={()=>{setWork2(true)}}
                onMouseLeave={()=>{setWork2(false)}}>
                    <div className={`${work2===true?"flex flex-col bg-gray-600 h-full":"hidden"}`}>
                    <h3 className="font-roboto text-center text-white text-[27px] mt-3">
                        A school Website
                    </h3>
                    <p className="font-roboto text-white ml-5 mr-5 leading-relaxed sm:hidden lap:hidden
                    lmd:hidden">
                        This is my complete front-end school Website link which 
                        visualize the needs of
                        a school website by including sections like Home, About Us,
                        Programs, Contact and Social Media
                        which showcasing my Front-end Skills.
                    </p>
                    </div>
                </div>
                </Link>           
                <Link href="https://www.npmjs.com/~abdullahsheikh6601">
                <div className="bg-[url('/images/work_3.jpg')] bg-cover bg-center 
                h-[190px] w-[410px] lap:h-[170px] lap:w-[390px] lap:ml-2 lap:mr-2 lmd:h-[130px] lmd:w-[350px]
                lmd:ml-1 border-2 border-black" 
                onMouseEnter={()=>{setWork3(true)}}
                onMouseLeave={()=>{setWork3(false)}}>
                     <div className={`${work3===true?"flex flex-col bg-gray-600 h-full":"hidden"}`}>
                    <h3 className="font-roboto text-center text-white text-[27px] mt-3">
                        NPM Projects
                    </h3>
                    <p className="font-roboto text-white ml-5 mr-5 leading-relaxed mt-2 sm:hidden lap:hidden
                    lmd:hidden">
                        By Clicking this you will be see my NPM Projects Repo
                        Where are my 7 cmd packages which shows my logics and expertise
                        in Node.js based cmd projects and also you can use them.
                    </p>
                    </div>
                </div>
                </Link>
                <Link href="https://todo-app-6601.vercel.app/" target="_blank">
                <div className="bg-[url('/images/work_4.jpg')] bg-cover bg-center 
                h-[190px] w-[410px] lap:h-[170px] lap:w-[390px] lmd:h-[130px] lmd:w-[350px]
                lmd:ml-1 lap:ml-2 lap:mr-2 border-2 border-black"
                 onMouseEnter={()=>{setWork4(true)}}
                onMouseLeave={()=>{setWork4(false)}}>
                    <div className={`${work4===true?"flex flex-col bg-gray-600 h-full":"hidden"}`}>
                    <h3 className="font-roboto text-center text-white text-[27px] mt-3">
                        Todo Web App
                    </h3>
                    <p className="font-roboto text-white ml-5 mr-5 leading-relaxed sm:hidden lap:hidden
                    lmd:hidden">
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