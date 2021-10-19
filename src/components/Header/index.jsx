import React from 'react';
import useMqtt from '../../hooks/useMqtt';
import DarkModeSwitch from '../DarkModeSwitch';
import Tooltip from '@atlaskit/tooltip';

const Header = () => {
  const { connectionStatus } = useMqtt();

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
        <Tooltip
          content={`Status da conexão com o broker
        VERMELHO: Falha na conexão | VERDE: Conectado | LARANJA: Conectando | CINZA: Pronto para conectar`}
        >
          <div className="flex">
            <div
              className={`w-2 h-2 flex self-center mr-2 rounded-lg animate-pulse ${color}`}
            ></div>
            <h1 className="text-base transition duration-1000 dark:text-gray-50">{`${connectionStatus.label}`}</h1>
          </div>
        </Tooltip>
        {/* data-tip="Status da conexão com o broker" */}
        {/* <ReactTooltip place="bottom" type="light" effect="solid" /> */}
      </div>

      <div className="py-auto flex">
        {/* <Switch className="sm:h-4" /> */}
        <DarkModeSwitch />
      </div>
    </header>
  );
};

export default Header;
