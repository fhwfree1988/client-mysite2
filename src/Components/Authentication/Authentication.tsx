import React, {useEffect, useState} from "react";


//The `Authenticator` component.
const Authentication : React.FC = props =>{
    const [isAuthenticated,setAuthenticated] = useState(false);//useSecurity();
    useEffect(()=>{
        setAuthenticated(false);
    },[])

    let ret = props.children;
    if(!isAuthenticated)
        ret = <div>"just login"</div>;

    return <>{ret}</>;
};

export default Authentication;