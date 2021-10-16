import React, { useState } from 'react';
import Sorting from '../Sorting';
import Switch from '../Switch';
import ModalFrame from '../ModalFrame';
import './style.css';
import ButtonSwitch from '../ButtonSwitch';
const Card = ({
  icon,
  titulo = 'Nome',
  descricao,
  togglable,
  status,
  info,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="card-container card">
      <div className="flex">
        <span className="flex flex-grow card-subtitle flex-row items-center">
          Status:
          <div
            className={`ml-1 w-2 h-2 flex self-center mr-2 rounded-lg ${
              status ? 'bg-green-600' : 'bg-gray-400'
            }`}
          ></div>
        </span>

        {togglable ? (
          <ButtonSwitch label={status ? 'ON' : 'OFF'} />
        ) : (
          <>
            <Sorting onClick={() => setModalOpen(!modalOpen)} />
            <ModalFrame open={modalOpen} setOpen={setModalOpen} />
          </>
        )}
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="mx-auto sm:mx-0 sm:mr-2 h-20 p-auto">
          <i className={`text-7xl sm:mr-1 ${icon}`} />
        </div>
        <div className="flex-initial">
          <span className="card-title">{titulo}</span>
          {descricao && <h3 className="card-subtitle">{descricao}</h3>}
          {info && <span className="card-subtitle">{info}</span>}
        </div>
      </div>
    </div>
  );
};

export default Card;
