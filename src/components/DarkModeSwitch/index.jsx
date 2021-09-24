import React from 'react';
import useDarkMode from '../../hooks/useDarkTheme';

const DarkModeSwitch = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();
  return (
    <span onClick={() => toggleTheme()}>{isDarkMode ? 'dark' : 'light'} </span>
  );
};

export default DarkModeSwitch;
