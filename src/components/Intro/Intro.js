import React from "react";
import { useRef, useEffect } from "react";
import Style from "./intro.module.scss";
import "./normal.css"
import { init } from "ityped";
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      
      backDelay:1500,
      backSpeed:50,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div id="intro" className={Style.intro}>
      <div className={Style.left}>
        <div className={Style.imagecontainer}>
          <img src="./assets/3.png" alt="" />
        </div>
      </div>
      <div className={Style.right}>
        <div className={Style.wrapper}>
          <h2>Hi There, I'm</h2>
          <h1>Enamul Haque</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
