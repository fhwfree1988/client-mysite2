import {useCallback, useEffect, useState} from "react";

const MenuItem = (props:any)=>{
    const [isOpen,setIsOpen] = useState(props.isOpen);
    let class_Name = "MenuItem_hide";
    useCallback((isOpen)=>{
        setIsOpen(props.isOpen);
        if(isOpen)
            class_Name ="MenuItem_show";
    },[isOpen]);
   /* useEffect((props.isOpen) => {

    },[isOpen]);*/
    return(

        <div className={`MenuItem ${class_Name}`}>{props.item.menuTitle}</div>
    )
}
export default MenuItem;