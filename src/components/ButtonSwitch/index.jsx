import React from 'react';

const ButtonSwitch = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-center content-center text-sm bg-gray-300 dark:bg-gray-500 bg-opacity-70 flex justify-center items-center py-4 px-1 h-8 w-7 rounded cursor-pointer dark:text-gray-50 hover:bg-gray-300 dark:hover:bg-gray-800 hover:bg-opacity-70 transition duration-1000`}
    >
      <span>{label}</span>
    </button>
  );
};

export default ButtonSwitch;
