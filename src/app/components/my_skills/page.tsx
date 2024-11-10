import Image from "next/image"
export default function mySkills(){
   return(
    <div id="my-skills">
    <h1 className="2xl:mt-11 xl:mt-12 sm:mt-10 lg:mt-14 text-[71px] font-roboto font-extrabold text-center">My Skills</h1>
    <div className="sm:ml-10 2xl:animate-slide xl:animate-slide sm:animate-none mt-9 flex gap-32 sm:gap-16 overflow-x-hidden w-auto overflow-y-hidden">
    <div>
    <i className="fa-brands fa-html5 text-[#e34f26] text-[150px]"></i>
    </div>
    <div>
    <i className="fa-brands fa-css3-alt  text-[#1572b6] text-[150px]"></i>
    </div>
   <div>
   <i className="fa-brands fa-js  text-[#f7df1e] text-[150px]"></i>
   </div>
   <div>
   <Image className="sm:w-[131px] sm:h-[130px]"
    src="/images/tslogo.png" height={150} width={150} alt="Type Script Logo"
    />
   </div>
    </div>
    </div>
   )
}