import {useCallback, useEffect, useState} from "react";

const MenuItem = (props:any)=>{
    //const [isOpen,setIsOpen] = useState(props.isOpen as boolean);
    let class_Name = "MenuItem_hide";
    if(props.isOpen as boolean)
        class_Name ="MenuItem_show";

    const _clientY  = props.openState[0].clientY ;

    /*useCallback(()=>{
        setIsOpen(props.isOpen);
        if(isOpen)
            class_Name ="MenuItem_show";
    },[isOpen]);*/
   /* useEffect((props.isOpen) => {

    },[isOpen]);*/
    //debugger;
    return(

        <div className={`MenuItem ${class_Name}`} style={{top : _clientY + 'px'}}>{props.item.menuTitle}</div>
    )
}
export default MenuItem;