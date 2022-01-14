import "./Resources/Css/MainMenu.css"
import React, {FC, useEffect, useState} from "react";
import Data from "./Resources/Data"
interface groupType {
    //children?: React.ReactElement<typeof Data>[]
    //group?: React.ReactElement<typeof Data>[]
    //group?: typeof Data
}

const MenuGroup /*:FC<groupType>*/ = (group:any) => {

    return (
        <div className="MenuGroup">
            {/*{React.Children.map(groups.children,(group) => {
                <div>{group.}</div>
            })};*/}
            <div>Salam</div>
            <div>{group.groupName}</div>
            {group.map((item:any) =>{
                <div>{item.item}</div>
            })}

        </div>
    )
}
export default MenuGroup;