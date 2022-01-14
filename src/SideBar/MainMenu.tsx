import React, {useEffect, useState} from "react";
import Data from "./Resources/Data";
import './Resources/Css/MainMenu.css';
import MenuGroup from "./MenuGroup";

const MainMenu = ()=>{
    const [Menu , setMenu] = useState({});
    /*const data = "[{group:[{ groupId: 1, groupName: \"A\",Menuitem:[{ menuId: 1, menuTitle: \"M\" },{ menuId: 1, menuTitle: \"M\" }]}]}," +
        "{group :[{ groupId: 2, groupName: \"B\" ,item:[{ menuId: 1, menuTitle: \"E\" },{ menuId: 1, menuTitle: \"H\" }]}]}," +
        "{group :[{ groupId: 3, groupName: \"C\" ,item:[{ menuId: 1, menuTitle: \"X\" },{ menuId: 1, menuTitle: \"Z\" }]}]}]";*/
        /*[{group:[{ groupId: 1, groupName: "A",Menuitem:[{ menuId: 1, menuTitle: "M" },{ menuId: 1, menuTitle: "M" }]}]},
        {group :[{ groupId: 2, groupName: "B" ,item:[{ menuId: 1, menuTitle: "E" },{ menuId: 1, menuTitle: "H" }]}]},
        {group :[{ groupId: 3, groupName: "C" ,item:[{ menuId: 1, menuTitle: "X" },{ menuId: 1, menuTitle: "Z" }]}]}]*/;

    useEffect(()=>{
        setMenu(Data);
        console.log("Init")
    },[]);

    return(
        <div className="MainMenu">
            <div className="MainMenu">Main</div>
            {Data.map((item) => {
                <MenuGroup group={item.group}></MenuGroup>
        })};
        </div>

    )

}
export default MainMenu;