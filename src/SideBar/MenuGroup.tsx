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
    const [isOpen,setIsOpen] = useState(false);
    const onclick=()=>{
        setIsOpen(!isOpen);
    };
    //debugger;
    return (
        <div className="MenuGroup">
            {/*{props.group.groupName}*/}
            <i className={`MenuGroupIcon + ${props.group.css}`} onClick={onclick}></i>
            <div>
                {props.group.menuitem.map((item:any) =>(
                    <MenuItem key={item.menuId} item={item} isOpen={isOpen}></MenuItem>
                ))}
            </div>
        </div>
    )
}
export default MenuGroup;