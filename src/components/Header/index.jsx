import React from 'react';
import useMqtt from '../../hooks/useMqtt';
import DarkModeSwitch from '../DarkModeSwitch';

const Header = () => {
  const { connectionStatus } = useMqtt();
  // const color = () => {
  //   if (connectionStatus.status === 100) {
  //     return ';
  //   } else if (connectionStatus === 200) {
  //     return 'bg-green-600';
  //   } else if (connectionStatus === 400) {
  //     return 'bg-red-600';
  //   }
  // };

  const color =
    connectionStatus.status === 100
      ? 'bg-yellow-600'
      : connectionStatus.status === 200
      ? 'bg-green-600'
      : connectionStatus.status === 400
      ? 'bg-red-600'
      : 'bg-gray-400';

  return (
    // <header className="flex justify-between items-center p-6 container">
    <header className="flex flex-row justify-around items-center p-3 sm:p-6 container mx-auto ">
      <div className="flex justify-start">
        <a href="/">
          <img
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
        </a>
      </div>
      {/*    */}

      <div className="flex flex-1 justify-center">
        <div
          className={`w-2 h-2 flex self-center mr-2 rounded-lg animate-pulse ${color}`}
        ></div>
        <h1 className="text-base transition duration-1000 dark:text-gray-50">{`${connectionStatus.label}`}</h1>
      </div>
      <div className="py-auto flex">
        {/* <Switch className="sm:h-4" /> */}
        <DarkModeSwitch />
      </div>
    </header>
  );
};

export default Header;
