import React, {createContext, useMemo, useState} from "react";
import {BrowserRouter, Routes} from "react-router-dom";
import AuthLayer from "../AuthLayer";
import App from "../../../App";

export const Context = createContext({
    Auth: false,
    setAuth: (val: boolean) => {
    },
});


const SecurityComponent = () => {
    const [Auth, setAuth] = useState(false);
    const _value = useMemo(
        () => ({Auth, setAuth}),
        [Auth]
    );

    return <Context.Provider value={_value}>
        <BrowserRouter>
            <AuthLayer>
                <Routes>
                    <App/>
                </Routes>
            </AuthLayer>
        </BrowserRouter>
    </Context.Provider>;
}

export default SecurityComponent;