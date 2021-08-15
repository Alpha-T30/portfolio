import Style from "./portfolioitem.module.scss"

export default function Portfolioitem({title,img}) {
    return (
        <div className={Style.item}>
                   <img src={img} alt="" />
                   <h3> {title}</h3>
               </div>
    )
}
