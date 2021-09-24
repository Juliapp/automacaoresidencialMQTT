import React from 'react';
import useDarkMode from '../../hooks/useDarkTheme';

const DarkModeSwitch = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();
  return (
    <span className="dark:text-gray-50" onClick={() => toggleTheme()}>
      {isDarkMode ? 'dark' : 'light'}
    </span>
  );
};

export default DarkModeSwitch;
