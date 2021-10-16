import React from 'react';

// import { Container } from './styles';

function Sorting({ onClick }) {
  return (
    <span
      onClick={onClick}
      className="py-4 px-1 rounded card-switch cursor-pointer dark:text-gray-50 hover:bg-gray-300 dark:hover:bg-gray-800 hover:bg-opacity-70 transition duration-1000"
    >
      <i className={`text-xl icon-sorting flex items-center`} />
    </span>
  );
}

export default Sorting;
