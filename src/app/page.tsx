import Navbar from "./components/navbar/page";
import Hero from "./components/hero/page";
import About_Me from "./components/about_me/page";
import My_Skills from "./components/my_skills/page";
import MyWork from "./components/my_work/page";
import Contact_Me from "./components/contact_me/page";
import Footer from "./components/footer/page";
export default function Home(){
  return(
    <div className="2xl:w-full md:w-screen xl:w-screen overflow-x-hidden">
      <Hero/>
    </div>
  )
}