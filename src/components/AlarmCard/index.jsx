import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonSwitch from '../ButtonSwitch';
import ModalFrame from '../ModalFrame';
import Sorting from '../Sorting';
import Tooltip from '@atlaskit/tooltip';

import useMqtt from '../../hooks/useMqtt';

const AlarmCard = ({ togglable, status, onClickButtonSwitch }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { alarm } = useMqtt();

  const color = alarm ? 'text-red-600' : 'text-green-600';
  const colorStatus = alarm ? 'bg-red-600' : 'bg-green-600';
  return (
    <div className="card rounded-md p-3 sm:p-6 flex flex-1 gap-2 content-between flex flex-col">
      <div className="flex flex-grow ">
        <span className="flex card-subtitle flex-row items-center">
          <Tooltip
            content={`Status do Alarme | VERAMELHO: Alarme ativo | CINZA: Alarme Desativado`}
          >
            <div className="flex">
              Status:
              <div
                className={`ml-1 w-2 h-2 flex self-center mr-2 rounded-lg ${colorStatus}`}
              ></div>
            </div>
          </Tooltip>
        </span>
      </div>

      <div className="flex flex-col sm:flex-row">
        <i
          className={`text-6xl sm:mr-3 icon-alarm self-center mx-2 ${color}`}
        />
        <div className="flex flex-col flex-grow justify-center">
          <span className="card-title">Alarme</span>
          <h3 className="card-subtitle">
            {`O alarme é ativo quando há presença de pessoas, portas ou janelas abertas.`}
            <br />
            {`(O modo automático desabilita as funções dos sensores, portanto o alarme só pode ser ligado ou desligado nesse modo).`}
          </h3>
        </div>

        <div className="flex items-center justify-end sm:flex-col">
          {togglable ? (
            <ButtonSwitch
              label={status ? 'ON' : 'OFF'}
              onClick={onClickButtonSwitch}
            />
          ) : (
            <>
              <Sorting onClick={() => setModalOpen(!modalOpen)} />
              <ModalFrame open={modalOpen} setOpen={setModalOpen} />
            </>
          )}
          <Link to="/alarmlogs">
            <button className="mt-2 p-1 rounded cursor-pointer dark:text-gray-50 hover:bg-gray-300 dark:hover:bg-gray-800 hover:bg-opacity-70 transition duration-1000">
              <i className="icon-list text-xl flex items-center" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlarmCard;
