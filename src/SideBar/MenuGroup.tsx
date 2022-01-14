import "./Resources/Css/MainMenu.css"
import React, {FC, useEffect, useState} from "react";
import Data from "./Resources/Data"
interface groupType {
    //children?: React.ReactElement<typeof Data>[]
    group?: React.ReactElement<typeof Data>[]
    group?: typeof Data
}

const MenuGroup :FC<groupType> = ({group}) => {

    return (
        <div className="MenuGroup">
            {/*{React.Children.map(groups.children,(group) => {
                <div>{group.}</div>
            })};*/}
            {group?.map((item) =>{
                <div>{item.key}</div>
            })}

        </div>
    )
}
export default MenuGroup;