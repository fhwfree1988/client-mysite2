import "./Resources/Header.css";
import {Trans, useTranslation} from "react-i18next";

const lngs:any = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Persian' }
};
const Header = ()=>{
    const { t,i18n  } = useTranslation();
    return(
        <div className="header">
            <img src={require('./Resources/Images/logo.png')} className="header-logo"/>
            <div className={"loginContainer"}>
                <div className="sign-in">{t('login.sign_in')}</div>
                <div className="sign-up">{t('login.sign_up')}</div>
            </div>
            <div>
                {Object.keys(lngs).map((lng) => (
                    <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
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