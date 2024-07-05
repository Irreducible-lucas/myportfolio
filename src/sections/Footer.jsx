import React from "react"
import { up } from "../assets/images"

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="w-[100%]  border-2"/>
      <div className="">
      <div className="flex text-center gap-2 text-slate-500 mt-4 items-center justify-center lg:justify-start lg:pl-10">
        <p>© 2024 Luqmonayobami.dev</p>
        <p>All Right reserved</p>
        </div>
        <div className="flex ">
        <div className="w-10 h-10 bg-black flex justify-center place-items-center fixed  bottom-0 right-0">
          <a href="/">
         <img src={up} alt="Arrow" width={30} height={30} />
         </a>
        </div>
        </div>
        
        </div>
       
        
    
    </footer>
  )
}

export default Footer
