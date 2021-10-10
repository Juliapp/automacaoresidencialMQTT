import React, { useState } from 'react';
import Sorting from '../Sorting';
import Switch from '../Switch';
import ModalFrame from '../ModalFrame';
import './style.css';
const Card = ({ icon, titulo = 'Nome', descricao, togglable }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="card-container card">
      {togglable ? (
        <div className="card-switch">
          <Switch />
        </div>
      ) : (
        <>
          <div className="flex self-end">
            <Sorting onClick={() => setModalOpen(!modalOpen)} />
          </div>
          <ModalFrame open={modalOpen} setOpen={setModalOpen} />
        </>
      )}

      <div className="flex flex-col sm:flex-row">
        <div className="mx-auto sm:mx-0 sm:mr-2 h-20 p-auto">
          {/* <img src={icon} alt="" /> */}
          <i className={`text-7xl sm:mr-1 ${icon}`} />
        </div>
        <div className="flex-initial my-auto">
          <span className="card-title">{titulo}</span>
          {descricao && <h3 className="card-subtitle">{descricao}</h3>}
        </div>
      </div>
    </div>
  );
};

export default Card;
