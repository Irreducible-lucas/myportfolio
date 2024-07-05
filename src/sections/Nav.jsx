import React from "react"
import { logo } from "../assets/images"
import { navLinks } from "../constant"

const Nav = () => {
  return (
    <nav>
    
      <div className="flex items-center gap-10 ">
      <a href="./">
      <img src={logo} alt="LOGO" width={50} height={50}  className="rounded-full"/>
      </a>
      <div className="w-[100%] h-15 rounded-3xl border-solid  shadow-md p-3 flex items-center justify-around md:w-[40%] lg:w-[30%] md:h-10 md:ml-10 "  >
        {navLinks.map((item, id) => {
              return(
                <div key={id}><a href={item.href} className=" leading-normal text-sm  text-slate-500 hover:text-red-500">{item.label}</a></div>
               )
            })}
      </div>
      </div>   
    </nav>
  )
}

export default Nav
