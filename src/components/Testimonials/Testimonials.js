import React from "react";
import Style from "./testimonial.module.scss";
export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur  recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    // <div className={`${Style.hello} ${Style.hi}`}></div>
    <div id="testimonial" className={Style.testimonial}>
      <h1>Testimonials</h1>
      <div className={Style.allcards}>
       {
         data.map((i)=>{
           return(
            <div className={i.featured?  `${Style.card} ${Style.featured}` :Style.card}>
            <div className={Style.top}>
              <img src="./assets/right-arrow.png" alt="" className={Style.leftimg} />
              <div className={Style.mid}><img src={i.img} alt="" className={Style.middleimg} /></div>
              <img src={i.icon} alt="" className={Style.rightimg} />
            </div>
            <div className={Style.middle}>
              <p> {i.desc}</p>
            </div>
            <div className={Style.bottom}>
              <span className={Style.name}>{i.name}</span>
              <span className={Style.postion}>{i.title}</span>
            </div>
          </div>
           )
         })
       }
      </div>
    </div>
  );
}
