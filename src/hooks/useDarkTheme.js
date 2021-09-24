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

  const [theme, setTheme] = useState(currentTheme ?? defaultValue);

  function themeSwitch(theme) {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', theme);
    setTheme(theme);
  }

  return {
    isDarkMode: theme === 'dark',
    setDarkMode: () => themeSwitch('dark'),
    setLightMode: () => themeSwitch('light'),
    toggleTheme: () =>
      theme === 'dark' ? themeSwitch('light') : themeSwitch('dark'),
  };
}
