import Form from "../form/page"
export default function Contact_Me(){
    return(<div className="flex flex-col justify-center 
        items-center pt-24" id="contact-me">
            <h2 className="text-[68.3px] text-black font-roboto font-extrabold lap:text-6xl lmd:text-6xl dark:text-white"
            >Contact Me</h2>
            <Form/>
        </div>)
}