import React, {useEffect, useState} from "react";
import Data from "./Resources/Data";
import './Resources/Css/MainMenu.css';
import MenuGroup from "./MenuGroup";

const MainMenu = ()=>{
    const [Menu , setMenu] = useState({});
    const [grid, setGrid] = useState([{ groupId: 1, groupName: "A",Menuitem:[{ menuId: 1, menuTitle: "M" },{ menuId: 1, menuTitle: "M" }]},
        { groupId: 2, groupName: "B" ,Menuitem:[{ menuId: 1, menuTitle: "E" },{ menuId: 1, menuTitle: "H" }]},
        { groupId: 3, groupName: "C" ,Menuitem:[{ menuId: 1, menuTitle: "X" },{ menuId: 1, menuTitle: "Z" }]}])
    //const [groups , setGroups] = useState();
    /*const data = "[{group:[{ groupId: 1, groupName: \"A\",Menuitem:[{ menuId: 1, menuTitle: \"M\" },{ menuId: 1, menuTitle: \"M\" }]}]}," +
        "{group :[{ groupId: 2, groupName: \"B\" ,item:[{ menuId: 1, menuTitle: \"E\" },{ menuId: 1, menuTitle: \"H\" }]}]}," +
        "{group :[{ groupId: 3, groupName: \"C\" ,item:[{ menuId: 1, menuTitle: \"X\" },{ menuId: 1, menuTitle: \"Z\" }]}]}]";*/
        /*[{group:[{ groupId: 1, groupName: "A",Menuitem:[{ menuId: 1, menuTitle: "M" },{ menuId: 1, menuTitle: "M" }]}]},
        {group :[{ groupId: 2, groupName: "B" ,item:[{ menuId: 1, menuTitle: "E" },{ menuId: 1, menuTitle: "H" }]}]},
        {group :[{ groupId: 3, groupName: "C" ,item:[{ menuId: 1, menuTitle: "X" },{ menuId: 1, menuTitle: "Z" }]}]}]*/;
    //let groups ;
    useEffect(()=>{
        //setMenu(Data);
        /*let _groups = (Data.at(0)?.group.map((item) =>
            <li>
                <div >test</div>
            </li>
        ));
        setGroups(_groups);*/
        console.log("Init")
    },[]);

    return(
        <div className="MainMenu">
            <div className="MainMenu">Main</div>
            <div>
                {grid.map((group) => (
                    <div>
                        <div className="MainMenu">{group.groupName}</div>
                        {/*<MenuGroup group={group}></MenuGroup>*/}
                    </div>
                ))}
            </div>
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