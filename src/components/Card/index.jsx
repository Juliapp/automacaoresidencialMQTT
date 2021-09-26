import React from 'react';
import Switch from '../Switch';
import './style.css';
const Card = ({ icon, titulo = 'Nome', descricao }) => {
  return (
    <div className="card-container card">
      <div className="card-switch">
        <Switch />
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="mx-auto sm:mx-0 sm:mr-2 ">
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
