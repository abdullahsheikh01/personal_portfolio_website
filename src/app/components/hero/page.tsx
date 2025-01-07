import Image from "next/image";
import Link from "next/link";
export default function Hero(){
    return(
        <div className="2xl:mb-32 2xl:overflow-y-hidden overflow-x-hidden xl:grid 2xl:grid lg:flex
         lg:flex-col-reverse lg:justify-center lg:items-center xl:grid-cols-2 2xl:grid-cols-2 sm:flex
          sm:flex-col-reverse sm:justify-center sm:items-center md:flex md:flex-col-reverse md:justify-center
           md:items-center lap:flex lap:flex-col-reverse lmd:flex lmd:flex-col-reverse pt-16">
            <div className="xl:w-[892px] lg:w-[892px] 2xl:w-[892px] h-auto ml-2 flex flex-col items-center
             xl:mt-24 2xl:xl:mt-24 lg:xl:mt-24 md:mt-8 lg:mt-0 lap:text-center lmd:text-center">
                <div>
                <h1 className="text-[60px] font-roboto font-extrabold lg:text-center md:text-center
                 sm:text-center sm:text-5xl lg:mb-2 lap:text-5xl  lap:text-center lap:leading-snug
                  lmd:hidden">Welcome I am <span className="text-[#2858D1]">
                    <Link href="https://www.linkedin.com/in/abdullah-shaikh-29699b302/" target="_blank">
                    Abdullah Shaikh</Link></span>,</h1>

                    <h1 className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden lap:hidden
                    lmd:text-[45px] font-roboto font-extrabold lmd:leading-snug">Welcome I am <br /><span className="text-[#2858D1]">
                    <Link href="https://www.linkedin.com/in/abdullah-shaikh-29699b302/" target="_blank">
                    Abdullah Shaikh</Link></span>,</h1>
                <p className="text-4xl text-center mt-4 font-roboto tracking-wide leading-relaxed lg:mt-0 
                lap:leading-snug lap:text-3xl lap:text-center lap:mr-8 lap:ml-8 lmd:hidden">
                    Hire me your go-to Web Developer for clean,<br /> responsive, and user-focused websites.</p>
                <p className="text-center mt-4 font-roboto tracking-wide leading-relaxed lmd:leading-relaxed
                lmd:text-2xl lmd:text-center lmd:mr-8 lmd:ml-8 2xl:hidden xl:hidden lg:hidden md:hidden 
                sm:hidden lap:hidden">
                    Hire me your go-to Web Developer <br />for clean, responsive, and <br />user-focused websites.</p>
                <center>
                <Link href="/components/contact_me">
                <button className="bg-[#B4FFAD] mt-16 w-[584px] h-24 rounded-3xl text-3xl ml-6 
                font-roboto hover:scale-125 sm:hover:scale-75 md:hover:scale-75 lap:hover:scale-75
                lmd:hover:scale-75 transition-all duration-500 lg:mt-8 sm:mt-12
                lap:w-[384px] lap:mt-4 lap:mr-6 lmd:w-[334px] lmd:mt-10 lmd:mr-6 lmd:h-20 dark:text-black">Contact Me
                </button>
                </Link>
                </center>
                </div>
            </div>
            <div>
            <center>
            <Image className="2xl:ml-[250px] 2xl:h-[348px] 2xl:w-[378px] 2xl:mt-[100px] xl:h-[290px]
             xl:w-[315px] xl:ml-72 xl:mt-32 lg:h-[261px] lg:w-[283.5px] lg:mt-28 lg:mr-[calc(100vw - 157.5px)]
              lg:ml-[calc(100vw - 157.5px)] lg:mt-6 lg:mb-2  md:h-[290px] md:w-[315px] md:mt-5 mb-3 
              lap:h-[174px] lap:w-[189px] lap:mt-3  lmd:h-[174px] lmd:w-[189px] lmd:mt-3"
                src="/images/dp.jpg"
                width={378}
                height={348}
                alt="My Profile Photo"/>
            </center>
            </div>

        </div>
    )
}