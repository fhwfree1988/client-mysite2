import Header from "./Components/Home/Header";
import HomePage from "./Components/Home/HomePage";
import Authentication from "./Components/Authentication/Authentication";
import React, {useContext, useState} from "react";
import {ThemeContext, themes} from "./AppContext";



const MainApp = () =>{
    /*function Toolbar(props) {
        return (
            <div>
                <ThemedButton />
            </div>
        );
    }

    function ThemedButton() {
        const theme = useContext(ThemeContext);
        return (
            <button style={{ background: theme.background, color: theme.foreground }}>
                I am styled by theme context!
            </button>
        );
    }*/
    const [Theme,setTheme] = useState(themes.dark)
    return(
        <ThemeContext.Provider value={{
            theme: Theme,
            toggleTheme: () => {
                if(Theme == themes.dark){
                    setTheme(themes.light)
                }else {
                    setTheme(themes.dark)
                }
            },
        }}>
            <Header></Header>
            <HomePage></HomePage>
        </ThemeContext.Provider>
    )

}

export default MainApp;