import "./Resources/Header.css";
import {Trans, useTranslation} from "react-i18next";
import React, {useContext} from "react";
import {Languages, ThemeContext,LanguageContext} from "../../AppContext";


const Header = ()=>{
    const { t,i18n  } = useTranslation();
    const theme = useContext(ThemeContext);
    return(
        <div className="header">
            <img src={require('./Resources/Images/logo.png')} className="header-logo"/>
            <div className={"loginContainer"}>
                <div className="sign-in">{t('login.sign_in')}</div>
                <div className="sign-up">{t('login.sign_up')}</div>
            </div>
            <div>
                {Object.keys(Languages).map((lng) => (
                    /*<button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                        {Languages[lng].nativeName}
                    </button>*/
                    <LanguageContext.Consumer>
                    {({lan, changeLanguage}) => (
                        <button
                            key={lng}
                            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                            type="submit"
                            onClick={changeLanguage}>
                                {Languages[lng].nativeName}

                        </button>
                    )}
                    </LanguageContext.Consumer>
                ))}
            </div>


            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (
                    <button
                        onClick={toggleTheme}
                        style={{backgroundColor: theme.background}}>
                        Toggle Theme
                    </button>
                )}
            </ThemeContext.Consumer>

            {/*<p>
                <Trans i18nKey="description.part1">
                    Edit <code>src/App.js</code> and save to reload.
                </Trans>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t('description.part2')}
            </a>*/}
        </div>
    )
}

export default Header;