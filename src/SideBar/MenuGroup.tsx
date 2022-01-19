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
    //const [isOpen,setIsOpen] = useState(false);
    let isOpen = false;
    //debugger;
    if(props.group.groupId === props.openState[0].groupId && (props.openState[0].isOpen as boolean)=== true)
        isOpen =true
    const onclick=()=>{
        //setIsOpen(!isOpen);
        props.setOpenState([{groupId:props.group.groupId,isOpen:!isOpen}])
    };
    //debugger;
    return (
        <div className="MenuGroup" onClick={onclick}>
            {/*{props.group.groupName}*/}
            <i className={`MenuGroupIcon + ${props.group.css}`} ></i>
            <div>
                {props.group.menuitem.map((item:any) =>(
                    <MenuItem key={item.menuId} item={item} isOpen={/*props.openState.isOpen*/isOpen} /*setIsOpen={setIsOpen}*/></MenuItem>
                ))}
            </div>
        </div>
    )
}
export default MenuGroup;