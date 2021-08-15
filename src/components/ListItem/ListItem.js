 import React from 'react'
 import Style from "./listitem.module.scss"
 
 export default function ListItem({id,title,isSelected,setSelected}) {
     return (
        
        <li onClick={() =>setSelected(id)}  className={isSelected&&Style.active  }>{title}</li>
     )
 }
 