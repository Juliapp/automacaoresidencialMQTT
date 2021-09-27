import React from 'react';
import useDarkMode from '../../hooks/useDarkTheme';

const DarkModeSwitch = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();
  return (
    <span
      className="cursor-pointer flex dark:text-gray-50 p-3 rounded hover:bg-gray-300 dark:hover:bg-gray-700 hover:bg-opacity-70 transition duration-1000"
      onClick={() => toggleTheme()}
    >
      <i
        className={`text-xl ${
          isDarkMode ? 'icon-dark-mode' : 'icon-light-mode'
        }`}
      />
    </span>
  );
};

export default DarkModeSwitch;
