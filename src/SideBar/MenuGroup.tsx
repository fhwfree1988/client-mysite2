import "./Resources/Css/MainMenu.css"
import React, {FC, useEffect, useState} from "react";
import Data from "./Resources/Data"
interface groupType {
    //children?: React.ReactElement<typeof Data>[]
    //group?: React.ReactElement<typeof Data>[]
    //group?: typeof Data
}

const MenuGroup /*:FC<groupType>*/ = (group:any) => {
debugger;
    return (
        <div className="MenuGroup">
            {/*{React.Children.map(groups.children,(group) => {
                <div>{group.}</div>
            })};*/}
            <div>Salam</div>
            <div key={group.groupId}>{group.groupName}</div>
            {group.Menuitem.map((item:any) =>{
                <div key={item.item.menuId}>{item.item.menuTitle}</div>
            })}

        </div>
    )
}
export default MenuGroup;