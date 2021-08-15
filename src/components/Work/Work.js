import Style from "./work.module.scss";
import { useState } from "react";

export default function Work() {
  const [slidePosition, setSlidePosition] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and   ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and  ",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and  .",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick=(direction) =>{
       direction==='left' ?   setSlidePosition(slidePosition>0?slidePosition-1:data.length-1)   :
       setSlidePosition(slidePosition<data.length-1?slidePosition+1:0) 
  }

  return (
    <div id="work" className={Style.work}>
      <div
        className={Style.slider}
        style={{
          transform: `translateX(-${slidePosition * 100}vw)`,
        }}
      >
        {data.map((i) => {
          return (
            <div className={Style.container}>
              <div className={Style.item}>
                <div className={Style.left}>
                  <div className={Style.leftcontainer}>
                    <div className={Style.imagecontainer}>
                      <img src={i.icon} alt="" />
                    </div>
                    <h2>Title</h2>
                    <p>{i.desc}</p>
                    <span>{i.title}</span>
                  </div>
                </div>
                <div className={Style.right}>
                  <img src={i.img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <img
      onClick={()=>handleClick('left')}
        src="assets/arrow.png"
        alt=""
        className={`${Style.arrow} ${Style.left}`}
      />

      <img
        src="assets/arrow.png"
        alt=""
        className={`${Style.arrow} ${Style.right}`}
     onClick={()=>{
         handleClick()
     }} />
    </div>
  );
}
