import React from 'react';
import Switch from '../Switch';

const Header = () => {
  // return (
  //   <header className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
  //     <div className="flex justify-start lg:w-0 lg:flex-1">
  //       <a href="/">
  //         <img
  //           className="h-8 w-auto sm:h-10"
  //           src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
  //           alt=""
  //         />
  //       </a>
  //     </div>

  //     <div className="md:flex justify-end">
  //       <Switch />
  //     </div>
  //   </header>
  // );
  return (
    // <header className="flex justify-between items-center p-6 container">
    <header className="flex justify-between items-center p-6 container mx-auto">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <a href="/">
          <img
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
        </a>
      </div>
      <div className="py-auto flex">
        <Switch className="sm:h-4" />
      </div>
    </header>
  );
};

export default Header;
