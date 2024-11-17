'use client'
import { useState } from "react";

export default function Form(){
    const [nameValue, setNameValue] = useState<string>("");
    const [emailValue,setEmailValue] = useState<string>("");    
    const [messageValue,setMessageValue] = useState<string>("");    
    function nameValueChecker(e: React.ChangeEvent<HTMLInputElement>){
        const namePatternChecker = e.target.value.replace(/[^a-zA-Z ]/g, "");
        setNameValue(namePatternChecker);
    };
    function emailValueHandler(e:React.ChangeEvent<HTMLInputElement>){
        const val:string=e.target.value;
        setEmailValue(val);
    }
    function messageValueHandler(e:React.ChangeEvent<HTMLTextAreaElement>){
        const val:string=e.target.value;
        setMessageValue(val);
    }
    
    return(
        <form className="font-label bg-[#FDC435] w-[796px] sm:w-[500px] h-auto flex flex-col items-center
         rounded-2xl lap:w-[350px] lap:mt-4 lmd:w-[300px] lmd:mt-6"
            action="https://formspree.io/f/mnnqvnbl" method="post">
            <label className="mt-10 text-base font-roboto tracking-[0.96px] mb-3">
                Enter Your Name
            </label>
            <input 
                type="text" 
                autoComplete="off" 
                required 
                name="Name"
                placeholder="Your Name" 
                value={nameValue} 
                onChange={nameValueChecker} 
                className="w-[320px] h-11 rounded-[13px] text-base pl-1 focus:ring-blue-500 lmd:w-[290px]"
            />
            
            <label className="mt-10 text-base font-roboto tracking-[0.96px] mb-3">
                Enter Your Email
            </label>
            <input 
                type="email" 
                autoComplete="off" 
                name="Email"
                maxLength={255}
                required 
                onChange={emailValueHandler}
                value={emailValue}
                placeholder="Your Email"
                className="w-[320px] h-11 rounded-[13px] text-base pl-1 focus:ring-blue-500 lmd:w-[290px]"/>
            <label className="mt-10 text-base font-roboto tracking-[0.96px] mb-3">
                Any Message
            </label>
            <textarea className="w-full 2xl:w-[calc(100%-96px)] xl:w-[calc(100%-80px)] lg:w-[calc(100%-64px)]
            md:w-[calc(100%-48px)] sm:w-[calc(100%-32px)] lap:w-[calc(100%-20px)] lmd:w-[calc(100%-12px)]
            rounded-xl font-roboto text-base text-gray-700 p-4 leading-relaxed 
            focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none" 
            placeholder="If you have any message, write here (optional)" name="Message" onChange={messageValueHandler}
            value={messageValue}/>
            <input 
                type="submit" className="w-[241px] sm:w-[241px] h-[52px] lap:w-[110px] bg-[#97DA95] rounded-full mt-12 
                text-2xl transition duration-300 ease-in-out text-center hover:bg-red-400 text-white 
                shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#97DA95]" value="Send"/>
        </form>
    )
}
