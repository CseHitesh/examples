import { useState } from "react";
import { ThemeContext } from "./context";
import { useMemo } from "react";

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
