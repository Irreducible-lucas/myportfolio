import React from "react"
import { html, js, react, chain1 } from "../assets/images"
import { projects } from "../constant"

const Project = () => {
  return (
    <section className="mt-30 grid grid-cols-2 lg:grid-cols-3 gap-2 md: gap-7justify-center items-center" id="project">
      {projects.map((item) => {
              return(
               <div className="w-[100%] h-[100%] p-3 lg:px-10 lg:py-8 rounded-lg shadow-sm shadow-slate-500 item-center hover:bg-slate-100/40" key={item.id} >
                <img src={item.imgURL}  width={40} height={40} className="my-5"/>
                <p className="my-5 ">{item.name}</p>
                <p>{item.description}</p>
                <a href={item.href} className="flex gap-2 md:gap-5 mt-10">
                <img src={chain1} alt=""  width={20} height={20} />
                <button className="text-[12px] md:text-sm lg:text-md text-slate-500">
                  View project
                </button>
                </a>
              </div>            
              )})}
    
      
    </section>
  )
}

export default Project
