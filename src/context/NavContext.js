'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";


const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => { false });


  const isWhiteMode = (value) => {
    setTheme(value);
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      isWhiteMode,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }

  return context;
};

