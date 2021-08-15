import React, { useEffect, useState } from "react";
import Style from "./portfolio.module.scss";
import Portfolioitem from "../Portfolioitem/Portfolioitem";
import ListItem from "../ListItem/ListItem";
import {
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from "../../data";

export default function Portfolio() {
  const [isSelected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (isSelected) {
      case "featured":
        setData(featuredPortfolio);

        break;
      case "web":
        setData(webPortfolio);

        break;
      case "design":
        setData(designPortfolio);

        break;
      case "content":
        setData(contentPortfolio);

        break;
      case "mobile":
        setData(mobilePortfolio);

        break;

      default:
        setData(featuredPortfolio);
    }
  }, [isSelected]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div id="portfolio" className={Style.portfolio}>
      <h1>Portfolio</h1>

      <ul>
        {list.map((e) => {
          return (
            <ListItem
              id={e.id}
              isSelected={isSelected === e.id}
              setSelected={setSelected}
              title={e.title}
            ></ListItem>
          );
        })}
      </ul>
      <div className={Style.container}>
          {data.map((d)=>{
     return         <Portfolioitem title={d.title} img={d.img} />
              
          })}
        
      </div>
    </div>
  );
}
