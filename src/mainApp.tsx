import Header from "./Components/Home/Header";
import HomePage from "./Components/Home/HomePage";
import Authentication from "./Components/Authentication/Authentication";
import React, {useContext, useState} from "react";
import {ThemeContext, LanguageContext, themes, Languages} from "./AppContext";
/*import {ThemeContext, themes} from "./AppContext";*/



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
    const [lang,setLang] = useState(Languages.fa)
    return(
        <LanguageContext.Provider value={{
            lan: Theme,
            changeLanguage: () => {
                if(Theme == Languages.fa){
                    setLang(Languages.en)
                }else {
                    setLang(Languages.fa)
                }
            },
        }}>
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
        <div>
            <LanguageContext.Consumer>
                {({lan, changeLanguage}) => (
                    <ThemeContext.Consumer>
                        {({theme, toggleTheme}) => (
                            <div style={{backgroundColor: theme.background , direction:lan.direction}}>
                                <Header></Header>
                                <HomePage></HomePage>
                            </div>
                        )}
                    </ThemeContext.Consumer>
                )}
            </LanguageContext.Consumer>
        </div>
        </ThemeContext.Provider>
        </LanguageContext.Provider>
        /*<ThemeContext.Provider value={{
            theme: Theme,
            toggleTheme: () => {
                if(Theme == themes.dark){
                    setTheme(themes.light)
                }else {
                    setTheme(themes.dark)
                }
            },
        }}>

        </ThemeContext.Provider>*/

    )

}

export default MainApp;