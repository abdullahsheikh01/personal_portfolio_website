import Image from "next/image";
export default function mySkills(){
   return(
    <div id="my-skills" className="pt-24 xl:mt-12 sm:mt-10 lg:mt-14 lap:mt-6 lmd:mt-6 h-screen">
    <h1 className="text-[71px] font-roboto font-extrabold text-center lap:text-6xl lmd:text-6xl">My Skills</h1>
    <div className="sm:ml-10 2xl:animate-none  mt-9 flex gap-32 sm:gap-16 
    overflow-x-hidden w-auto overflow-y-hidden 2xl:gap-28 lg:justify-center lg:gap-28 lg:ml-8 lg:mr-8
    sm:mr-7 lap:mt-8 lap:gap-6 lap:justify-center lmd:mt-8 lmd:gap-6 lmd:justify-center">
    <div>
    <i className="fa-brands fa-html5  text-[#e34f26] text-[150px]  sm:text-[110px] lap:text-[70px]
     lmd:text-[70px]"></i>
    </div>
    <div>
    <i className="fa-brands  fa-css3-alt  text-[#1572b6] text-[150px]  sm:text-[110px] lap:text-[70px] 
    lmd:text-[70px]"></i>
    </div>
   <div>
   <i className="fa-brands fa-js  text-[#f7df1e] text-[150px]  sm:text-[110px] lap:text-[70px]
   lmd:text-[70px]"></i>
   </div>
   <div>
   <Image className="sm:w-[131px] sm:h-[110px] lap:w-[70px] lap:h-[70px] lmd:w-[70px] lmd:h-[70px]"
    src="/images/tslogo.png" height={150} width={150} alt="Type Script Logo"
    />
   </div>
    </div>
    </div>
   )
}