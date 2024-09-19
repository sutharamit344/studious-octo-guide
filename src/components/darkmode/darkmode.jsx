import React, { createContext, useState } from 'react'

export const UseDarkMode = createContext()

export function DarkModeProvider({children}) {

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  console.log(mediaQuery)
  
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true" ? true : false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        localStorage.setItem("darkMode", !darkMode)
    }

  return (
    <UseDarkMode.Provider value={{darkMode, toggleDarkMode}}>
        {children}
    </UseDarkMode.Provider>
  )
}
