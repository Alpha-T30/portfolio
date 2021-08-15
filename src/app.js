import React, { useState } from 'react'
import Style from "./app.module.scss"
import Contact from './components/Contact/Contact'
import Intro from './components/Intro/Intro'
import Menue from './components/Menue/Menue'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonial from './components/Testimonials/Testimonials'
import Topbar from './components/Topbar/Topbar'
import Work from './components/Work/Work'
export default function App() {
  const [isactive, setActive] = useState(false); 

  

    return (
        <>
        <div className={Style.home}>
           <Topbar isactive={isactive} setActive={setActive}></Topbar> 
           <Menue isactive={isactive} setActive={setActive} /> 
           <div className={Style.sections}>
             <Intro></Intro> 
               <Portfolio></Portfolio>
               <Work></Work>
               <Testimonial></Testimonial>
               <Contact></Contact>
               </div>  
        </div>
         </>
    )
}
