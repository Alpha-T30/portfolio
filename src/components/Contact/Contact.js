
import React, { useRef } from "react";
import Style from "./contact.module.scss";
import { useState } from "react";
import axios from "axios";


// require('dotenv').config() ; 


export default function Contact() {
  const [isSend, setSend] = useState(false);
  const [isProblem, setProblem] = useState(false);

  const emailRef = useRef();
  const messageRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(emailRef.current.value);

    try {
      await axios.post(process.env.REACT_APP_API, {
        senderEmail: emailRef.current.value,
        receiverEmail:"mrhaquet20@gmail.com",
        text: messageRef.current.value,
      });
      setSend(true);
      setTimeout(() => {
        setSend(false);
        e.target.reset();
      }, 5000);
    } catch (error) {
      setProblem(true);
      setTimeout(() => {
        e.target.reset();
      }, 5000);
    }
  };

  return (
    <div className={Style.contact} id="contact">
      <div className={Style.left}>
        <img src="./assets/shake.svg" alt="" className={Style.svg} />
      </div>
      <div className={Style.right}>
        <h1>Contact.</h1>
        {isSend ? (
          <span className={Style.greet}>
            Thank You , I will reply soon... 😇{" "}
          </span>
        ) : (
          isProblem && (
            <div className={Style.errormsg}>
              <span className={Style.greetred}>
                Server Problem Call on what's app +8801611126730{" "}
              </span>
              <button onClick={() => setProblem(false)}>X</button>
            </div>
          )
        )}
        <form onSubmit={submitHandler}>
          <input id='email' ref={emailRef} placeholder="Email" type="email" />
          <textarea
            ref={messageRef}
            type="text"
            placeholder="Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
