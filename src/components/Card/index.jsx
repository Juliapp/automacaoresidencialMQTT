import React from 'react';
import Switch from '../Switch';
import icon from '../../assets/icon.svg';
import './style.css';
const Card = () => {
  return (
    <div className="card-container">
      <div className="card-switch">
        <Switch />
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="mx-auto sm:mx-0 sm:mr-2 ">
          <img src={icon} alt="" />
        </div>
        <div className="flex-initial my-auto">
          <span className="card-title">Nome</span>
          <h3 className="card-body">Mais alguma coisa</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
