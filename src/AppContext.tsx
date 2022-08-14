import React, {useState} from "react";

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
}

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {

    },
});

export const Languages:any = {
    en: {
        nativeName: 'English',
        direction : 'ltr'
    },
    fa: {
        nativeName: 'Persian' ,
        direction : 'rtl'
    }
};
export const LanguageContext = React.createContext({
    lan: Languages.en,
    changeLanguage: () => {},
});

const UserContext = React.createContext({
    name: 'Guest',
});
