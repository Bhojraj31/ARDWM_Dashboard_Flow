
/*
* @Copyright notice:- AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws.
* */

import React, { createContext, useContext, ReactNode } from 'react';
import { Theme, lightTheme, darkTheme } from './Themes';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = React.useState<Theme>(lightTheme);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const useThemedStyles = (styles: any) => {
    const theme = useTheme();
    return styles(theme);
};

