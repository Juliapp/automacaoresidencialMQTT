import { useState } from 'react';

const defaultValue = 'light';
// Hook
export default function useDarkTheme() {
  // Get the current theme from local storage
  const currentTheme = localStorage.theme === 'dark';

  // If the current local storage item can be found
  if (currentTheme) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const [theme, setTheme] = useState((currentTheme && 'dark') ?? defaultValue);
  const [isDarkMode, setIsDarkMode] = useState(currentTheme || false);

  function themeSwitch(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }

    localStorage.setItem('theme', theme);
    setTheme(theme);
  }

  return {
    isDarkMode,
    setDarkMode: () => themeSwitch('dark'),
    setLightMode: () => themeSwitch('light'),
    toggleTheme: () =>
      theme === 'dark' ? themeSwitch('light') : themeSwitch('dark'),
  };
}
