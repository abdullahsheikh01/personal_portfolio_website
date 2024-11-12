import Form from "../form/page"
export default function Contact_Me(){
    return(<div className="flex flex-col justify-center 
        items-center mt-20" id="contact-me">
            <h2 className="text-[68.3px] text-black font-roboto font-extrabold lap:text-6xl lmd:text-6xl"
            >Contact Me</h2>
            <Form/>
        </div>)
}