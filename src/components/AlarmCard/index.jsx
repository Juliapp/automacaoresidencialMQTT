import React, { useState } from 'react';
import ModalFrame from '../ModalFrame';
import Sorting from '../Sorting';
import Switch from '../Switch';

const AlarmCard = ({ togglable }) => {
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
      <div className="card-switch">
        {togglable ? (
          <Switch />
        ) : (
          <>
            <Sorting onClick={() => setModalOpen(!modalOpen)} />
            <ModalFrame open={modalOpen} setOpen={setModalOpen} />
          </>
        )}
      </div>
    </div>
  );
};

export default AlarmCard;
