import React from 'react';
import Switch from '../Switch';
import './style.css';
const Card = ({ icon, titulo = 'Nome', descricao, togglable }) => {
  return (
    <div className="card-container card">
      {togglable ? (
        <div className="card-switch">
          <Switch />
        </div>
      ) : (
        <div className="py-auto flex self-end">
          <span className="card-switch cursor-pointer dark:text-gray-50 p-3 rounded hover:bg-gray-300 dark:hover:bg-gray-700 hover:bg-opacity-70 transition duration-1000">
            <i className={`text-xl icon-sorting`} />
          </span>
        </div>
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
