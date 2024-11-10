import Link from "next/link"
export default function Footer(){
  return(
    <footer className="flex bg-gray-800 h-80 justify-center items-center  pl-20 pr-20 mt-20 sm:pl-10 sm:pr-10">
      <div className="flex justify-between w-screen">
      <div>
        <h5 className="text-5xl sm:text-4xl text-white">Abdullah Shaikh</h5>
        <p className="text-xl xl:text-2xl text-white">Web Developer</p>
      </div>
      <div>
      <Link href="">
      <i className="fa-brands fa-linkedin fa-beat text-[#0a66c2] text-[150px] sm:text-[90px]"></i>
      </Link>
      </div>
      <div>
        <p className="text-white text-xl 2xl:text-xl xl:text-3xl"><Link href="">abdullahkamran6601@gmail.com</Link></p>
        <p className="text-white text-xl 2xl:text-xl xl:text-3xl">03452931370</p>
      </div>
      </div>
    </footer>
  )
}