'use client'
import { useState } from "react";

export default function Form(){
    const [nameValue, setNameValue] = useState<string>("");
    
    function nameValueChecker(e: React.ChangeEvent<HTMLInputElement>){
        const namePatternChecker = e.target.value.replace(/[^a-zA-Z]/g, "");
        setNameValue(namePatternChecker);
    }
    
    return(
        <form className="font-label bg-[#FDC435] w-[796px] sm:w-[750px] h-auto flex flex-col items-center rounded-2xl"
            action="https://formspree.io/f/mnnqvnbl"
            method="post">
            
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
                className="w-[320px] h-11 rounded-[13px] text-base pl-1"
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
                placeholder="Your Email"
                className="w-[320px] h-11 rounded-[13px] text-base pl-1"
            />
            
            <label className="mt-10 text-base font-roboto tracking-[0.96px] mb-3">
                Any Message
            </label>
            <textarea 
                cols={80} 
                rows={10} 
                className="rounded-xl font-roboto text-base text-gray-700 p-4 leading-relaxed 
                focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none" 
                placeholder="If you have any message, write here (optional)" 
                name="Message"
            ></textarea>

            <input 
                type="submit"
                className="w-full sm:w-[241px] h-[5.2rem] bg-[#97DA95] rounded-full mt-12 text-2xl transition duration-300 ease-in-out 
                text-center hover:bg-red-400 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 
                focus:ring-[#97DA95]" 
                value="Send"
            />
        </form>
    )
}
