import React from 'react';
import useMqtt from '../../hooks/useMqtt';
import DarkModeSwitch from '../DarkModeSwitch';
import Tooltip from '@atlaskit/tooltip';

const Header = () => {
  const { connectionStatus, statusRasp } = useMqtt();

  function getColor(status) {
    return status === 100
      ? 'bg-yellow-600'
      : status === 200
      ? 'bg-green-600'
      : status === 400
      ? 'bg-red-600'
      : 'bg-gray-400';
  }
  const color = getColor(connectionStatus.status);
  const raspcolor = getColor(statusRasp);

  return (
    // <header className="flex justify-between items-center p-6 container">
    <header className="flex flex-row justify-between items-center p-3 sm:p-6 container mx-auto ">
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

      <Tooltip
        content={`Status da conexão
        VERMELHO: Falha na conexão | VERDE: Conectado | LARANJA: Conectando | CINZA: Pronto para conectar`}
      >
        <div className="flex flex-1 justify-center gap-3">
          {/* CONEXÃO COM O BROKER */}
          <div className="flex">
            <div
              className={`w-2 h-2 flex self-center mr-2 rounded-lg animate-pulse ${color}`}
            ></div>
            <h1 className="text-base transition duration-1000 dark:text-gray-50">{`Broker`}</h1>
          </div>
          {/* CONEXÃO COM A RASP */}
          <div className="flex">
            <div
              className={`w-2 h-2 flex self-center mr-2 rounded-lg animate-pulse ${raspcolor}`}
            ></div>
            <h1 className="text-base transition duration-1000 dark:text-gray-50">{`Raspberry`}</h1>
          </div>

          {/* data-tip="Status da conexão com o broker" */}
          {/* <ReactTooltip place="bottom" type="light" effect="solid" /> */}
        </div>
      </Tooltip>

      <div className="py-auto flex">
        {/* <Switch className="sm:h-4" /> */}
        <DarkModeSwitch />
      </div>
    </header>
  );
};

export default Header;
