import Link from "next/link"
export default function Footer(){
  return(
    <footer className="flex bg-gray-800 h-80 justify-center items-center sm:gap-20 pl-20 pr-20 mt-20
     sm:pl-10 sm:pr-10 lap:h-68 lap:pr-10 lap:pl-10 lap:h-68 lmd:pr-10 lmd:pl-10 lmd:h-68">
      <div className="flex 2xl:justify-between xl:justify-between lg:justify-between md:justify-between
      w-screen sm:flex-col sm:gap-5 lap:flex-col lap:gap-5 lmd:flex-col lmd:gap-5">
      <div>
        <h5 className="text-5xl sm:text-4xl lap:text-3xl text-white lmd:text-3xl">Abdullah Shaikh</h5>
        <p className="text-xl xl:text-2xl text-white lmd:text-3xl">Web Developer</p>
      </div>
      <div>
      <center>
      <Link href="">
      <i className="fa-brands fa-linkedin fa-beat text-[#0a66c2] text-[150px] 
      sm:text-[100px] lap:text-[70px] lmd:text-[70px]"></i>
      </Link>
      </center>
      </div>
      <div>
        <p className="text-white text-xl 2xl:text-xl xl:text-3xl text-[20px]"><Link href="">abdullahkamran6601@gmail.com</Link></p>
        <p className="text-white text-xl 2xl:text-xl xl:text-3xl text-[20px]">+923293932313</p>
      </div>
      </div>
    </footer>
  )
}