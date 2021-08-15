import React from 'react'; 
import Style from "./menue.module.scss" ; 

export default function Menue({isactive, setActive}) {
    return (
         
            <div className=  {isactive? `${Style.wrapper} ${Style.active}`: Style.wrapper}>
                <ul className={Style.lists}>
                    <li onClick={()=>{setActive(!isactive)}} className={Style.listItem}><a href="#intro" className={Style.link}>Home</a></li>
                    <li onClick={()=>{setActive(!isactive)}} className={Style.listItem}><a href="#portfolio" className={Style.link}>Portfolio</a></li>
                    <li onClick={()=>{setActive(!isactive)}} className={Style.listItem}><a href="#work" className={Style.link}>Works</a></li>
                    <li onClick={()=>{setActive(!isactive)}} className={Style.listItem}><a href="#testimonial" className={Style.link}>Testimonials</a></li>
                    <li onClick={()=>{setActive(!isactive)}} className={Style.listItem}><a href="#contact" className={Style.link}>Contact</a></li>
                </ul>
            </div>
         
    )
}
