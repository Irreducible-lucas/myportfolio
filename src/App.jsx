import React from 'react'
import { AboutMe, Footer, Nav, Project  } from './sections'
import Contact from './sections/Contact'

const App = () => {
  return (
   <div >
    <section className='px-10 md:px-20 py-10'>
    <Nav />
    </section>
    <section className='px-10 md:px-20 py-10'>
    <AboutMe />
    </section>
    <section className='px-10 md:px-20 py-10'>
    <Project />
    </section>
    <section className='px-10 md:px-20 py-10'>
    <Contact />
    </section>
    <section >
    <Footer/>
    </section>
    
   </div>


  )
}

export default App
