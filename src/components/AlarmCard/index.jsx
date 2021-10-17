import React, { useState } from 'react';
import ButtonSwitch from '../ButtonSwitch';
import ModalFrame from '../ModalFrame';
import Sorting from '../Sorting';

const AlarmCard = ({ togglable, status, onClickButtonSwitch }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="card rounded-md p-3 sm:p-6 flex flex-1 gap-2 content-between">
      <i className={`text-6xl sm:mr-2 icon-alarm self-center mx-2`} />
      <div className="flex flex-col flex-grow justify-center">
        <span className="card-title">Alarme</span>
        <h3 className="card-subtitle">
          Quando ativo, você pode pré-programar as rotinas da casa via sensores.
        </h3>
      </div>
      <div className="flex items-center flex-col">
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

        <button className="mt-2 p-1 rounded cursor-pointer dark:text-gray-50 hover:bg-gray-300 dark:hover:bg-gray-800 hover:bg-opacity-70 transition duration-1000">
          <i className="icon-list text-2xl flex items-center" />
        </button>
      </div>
    </div>
  );
};

export default AlarmCard;
