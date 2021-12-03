import React, { useRef, useState } from 'react';
import useMqtt from '../../hooks/useMqtt';
import DarkModeSwitch from '../DarkModeSwitch';
import ModalFrame from '../ModalFrame';
import Sorting from '../Sorting';
import Tooltip from '@atlaskit/tooltip';

import { resetPing } from '../../api';

const Header = () => {
  const { connectionStatus, statusRasp, timecron, setTimeCron } = useMqtt();
  const [modalOpen, setModalOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [timePlaceHolder, setTimePlaceHolder] = useState(timecron);

  const handleChangePingTime = () => {
    resetPing(timePlaceHolder).then(() => {
      setTimeCron(timePlaceHolder);
    });
    setModalOpen(false);
  };

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
  const raspcolor = getColor(statusRasp.status);

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
        <div className="flex flex-1 justify-center align-middle gap-3">
          {/* CONEXÃO COM O BROKER */}
          <div className="align-baseline flex gap-3">
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
              <h1 className="text-base transition duration-1000 dark:text-gray-50">{`Rasp`}</h1>
            </div>
          </div>

          {/* data-tip="Status da conexão com o broker" */}
          {/* <ReactTooltip place="bottom" type="light" effect="solid" /> */}
          <Sorting onClick={() => setModalOpen(!modalOpen)} />
        </div>
      </Tooltip>

      <ModalFrame open={modalOpen} setOpen={setModalOpen}>
        {/* {children && React.cloneElement(children, { setOpen: setModalOpen })} */}
        <span className="flex justify-center dark:text-gray-50">
          Tempo de ping pra rasp
        </span>
        <label className="block text-gray-500 text-sm font-bold mb-2">
          Tempo de ping em minutos para verificar se a raspberry responde
        </label>

        <input
          className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="timecron"
          type="number"
          placeholder="value"
          value={timePlaceHolder}
          onChange={(e) => {
            setTimePlaceHolder(e.target.value);
          }}
        />

        <div className="bg-gray-200 dark:bg-gray-900 py-3 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700  sm:ml-3 sm:w-auto sm:text-sm"
            onClick={handleChangePingTime}
          >
            Ok
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setModalOpen(false)}
            ref={cancelButtonRef}
          >
            Cancelar
          </button>
        </div>
      </ModalFrame>

      <div className="py-auto flex">
        {/* <Switch className="sm:h-4" /> */}
        <DarkModeSwitch />
      </div>
    </header>
  );
};

export default Header;
