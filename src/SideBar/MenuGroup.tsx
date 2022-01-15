import "./Resources/Css/MainMenu.css"
import React, {FC, useEffect, useState} from "react";
import Data from "./Resources/Data"
import MenuItem from "./MenuItem";
interface groupType {
    //children?: React.ReactElement<typeof Data>[]
    //group?: React.ReactElement<typeof Data>[]
    //group?: typeof Data
}

const MenuGroup /*:FC<groupType>*/ = (props:any) => {
    //debugger;
    return (
        <div className="MenuGroup">
            {/*{props.group.groupName}*/}
            <i className={`MenuGroupIcon + ${props.group.css}`}></i>
            <div>
                {props.group.menuitem.map((item:any) =>(
                    <MenuItem key={item.menuId} item={item}></MenuItem>
                ))}
            </div>
        </div>
    )
}
export default MenuGroup;