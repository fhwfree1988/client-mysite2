import React, {useContext, useMemo} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Context} from "./Security/SecurityComponent";

const AuthLayer: React.FC<any> = (myProp: any) => {

    debugger;

    const {Auth , setAuth} = useContext(Context);

    let navigate = useNavigate();

    function getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = !tokenString || tokenString.toString() == "" ? null : JSON.parse(tokenString);
        return userToken?.token
    }

    const token = getToken();

    if (!Auth) {
        // setAuth(true);
        navigate('login');
        return <div>Athenticated</div>
    }


    // if (requireAuth &&(!baseUser || !baseUser.id_token || !isValidJWT(baseUser.id_token))) {
    //     localStorage.removeItem("userInfo");
    //     router.push(`/account/login?returnUrl=${router.pathname}`);
    //     return null;
    // }
    //
    // return (
    //     <>
    //         {!requireAuth || userInfo ? (
    //             children
    //         ) : (
    //             <Placeholder>
    //                 <Spinner size="large" />
    //             </Placeholder>
    //         )}
    //     </>
    // );

    return null;
}
export default AuthLayer;
