import ProductList from "../Product/ProductList";
import "./Resources/Header.css";
import {useTranslation} from "react-i18next";
import React, {useContext} from "react";
import {ThemeContext} from "../../AppContext";

const HomePage = ()=>{

    const { t,i18n  } = useTranslation();
    const theme = useContext(ThemeContext);

    return(
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <div style={{backgroundColor: theme.background}}>
                    {/* <img src={require('./Resources/Images/style.png')} className="page-style"></img>*/}

                    <div >{t('Test.Test')}</div>


                    <ProductList></ProductList>
                </div>
            )}
        </ThemeContext.Consumer>

    )
}
export default HomePage;