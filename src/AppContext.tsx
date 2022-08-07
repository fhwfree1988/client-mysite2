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
    en: { nativeName: 'English' },
    fa: { nativeName: 'Persian' }
};
export const LanguageContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

const UserContext = React.createContext({
    name: 'Guest',
});
