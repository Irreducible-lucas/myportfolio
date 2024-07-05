import 'animate.css';
import React from 'react'
import { github, instagram, myself, myself2, twitterblack } from '../assets/images'

const AboutMe = () => {
  return (
    <section className='mt-2' id='about-me'>
      <div className='flex items-center gap-60 '>
      <div>
        <img src={myself2} alt="" width={300} height={200}  className='flex lg:hidden mb-10 rounded-3xl rotate-1'/> 
        
      <h1 className='h4 text-[1.8rem] font-medium md:h1 animate__animated animate__bounceInUp animate__slower'>
        Front-end developer
      </h1>
    
      <p className='text-md leading-[1.5rem] md:text-[.8rem] md:leading-[1.75rem] lg:text-[1rem] lg:leading-8 lg:max-w-xl text-slate-500 mt-2 animate__animated animate__fadeInUp animate__slower animate__delay-3s'>
      As a frontend developer, I specialize in building engaging user interfaces and interactive experiences for web applications using HTML, CSS, and JavaScript. I am proficient in frontend frameworks like React, Angular, or Vue.js and collaborate closely with designers and backend developers to ensure smooth integration and exceptional user experiences across devices and browsers.
      </p>
      </div>
      <div className='hidden lg:flex'>
        <img src={myself} alt="Myself" width={240} height={240} className='flex right-0'/>
      </div>
      </div>
      <div className='flex gap-5 my-5 animate__animated animate__fadeInUp animate__slower animate__delay-3s'>
        <a href='https://x.com/AkinsanyaLuqmon'>
          <img src={twitterblack} alt="twitter" width={30} height={30}  className='hover:opacity-50'/>
        </a>
        <a href= "https://github.com" >
          <img src={github} alt="github" width={30} height={30} className='hover:opacity-50' />
        </a>
        <a href='https://www.instagram.com/irreducible_lucas/'>
          <img src={instagram} alt="instagram" width={30} height={30}  className='hover:opacity-50'/>
        </a>
        
      </div>

    </section>
  )
}

export default AboutMe
