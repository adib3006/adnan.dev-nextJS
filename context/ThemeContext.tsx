'use client';
import React, { ReactElement, ReactNode, createContext, useState } from 'react';

interface ThemeContextValue {
    toggle: () => void;
    mode: 'dark' | 'light';
}

const ThemeContext = createContext({} as ThemeContextValue);

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => {
    const [mode, setMode] = useState<'dark' | 'light'>('dark');

    const toggle = (): void => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider
            value={{
                toggle,
                mode,
            }}
        >
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
