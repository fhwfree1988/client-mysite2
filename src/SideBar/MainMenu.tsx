import React, {useEffect, useState} from "react";
import Data from "./Resources/Data";
import './Resources/Css/MainMenu.css';
import MenuGroup from "./MenuGroup";
import "../Resources/css/FontAwesome/all.css"

const MainMenu = ()=>{
    const [Menu , setMenu] = useState({});
    const [openState,setOpenState] = useState([{groupId:-1,isOpen:false}]);
    /*const [data, setData] = useState([{ groupId: 1, groupName: "A",Menuitem:[{ menuId: 1, menuTitle: "M" },{ menuId: 1, menuTitle: "M" }]},
        { groupId: 2, groupName: "B" ,Menuitem:[{ menuId: 1, menuTitle: "E" },{ menuId: 1, menuTitle: "H" }]},
        { groupId: 3, groupName: "C" ,Menuitem:[{ menuId: 1, menuTitle: "X" },{ menuId: 1, menuTitle: "Z" }]}])*/

    useEffect(()=>{
        //console.log("Init")
    },[]);

    return(
        <div className="MainMenu">
            {Data.map((group) => (
                <MenuGroup key={group.groupId} group={group} openState={openState} setOpenState={setOpenState}></MenuGroup>
            ))}
        </div>

    )
    /*const [grid, setGrid] = useState([{a1: 1, a2: 2}, {a1: 2, a2: 2}, {a1: 3, a2: 2}])

    // useEffect(() => {
    //     setGrid([{a1: 3, a2: 2}, {a1: 4, a2: 2}, {a1: 5, a2: 2}])
    // }, []);


    return <div>
        {grid.map((listItem, index) => (
                <div>{listItem.a1}</div>
            )
        )}
    </div>*/

}
export default MainMenu;