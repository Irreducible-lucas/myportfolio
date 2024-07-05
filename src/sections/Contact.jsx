import React from "react"
import { github, instagram, linkedinblack,  mailblack,  twitterblack } from "../assets/images"
import { contact } from "../constant"


const Contact = () => {
  return (
    <section id="contact">
      <h1 className='h4 hover:text-red-500'>
     Contact
      </h1>
     <p className="text-md leading-[1.5rem] md:text-[.8rem] md:leading-[1.75rem] lg:text-[1rem] lg:leading-8  text-slate-500 mt-5 ">
     I specialize in creating dynamic web experiences using HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js. With a strong focus on user-centered design and flawless functionality, I deliver engaging interfaces that exceed expectations. Hire me for innovative solutions that drive success in your digital projects.
     </p>
      <div className="mt-20">
      {contact.map((item, index) => {
              return(
                <div key={index}>
                  <a href={item.href} className="flex gap-5 mt-5 ">
                  <img src={item.imgURL} width={20} height={15} className="opacity-60 hover:opacity-100"/>
                  <p className="text-slate-500 hover:text-black">
                    {item.description}

                  </p>
                  </a>
                 
                  
                
                </div>
               )
            })}
        </div>

      
    </section>
  )
}

export default Contact
