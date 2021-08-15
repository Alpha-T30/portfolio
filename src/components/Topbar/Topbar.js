import React, { useState } from "react";
import Style from "./topbar.module.scss";
import { Mail, Person, PersonAdd } from "@material-ui/icons";
export default function Topbar({isactive, setActive}) {

    
  return (
    <div className= {isactive? `${Style.topbar} ${Style.active}`: Style.topbar}>
      <div className={Style.wrapper}>
        <div className={Style.left}>
          <a href="#contact" className={Style.logo}>
            alpha.
          </a>
          <div className={Style.items}>
            <div className={Style.itemcontainer}>
              <Person className={Style.icons}></Person>
              <span>+8801611126730</span>
            </div>
            <div className={Style.itemcontainer}>
              <Mail className={Style.icons}></Mail>
              <span>enamul@alpha.com</span>
            </div>
          </div>
        </div>
        <div className={Style.right}>
          <div onClick={()=>{setActive(!isactive)}} className={Style.hamburger}>
            <span className={Style.ham1}></span>
            <span className={Style.ham2}></span>
            <span className={Style.ham3}></span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
