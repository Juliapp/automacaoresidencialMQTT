import React from 'react';
import Switch from '../Switch';

const AlarmCard = ({ togglable }) => {
  return (
    // <div className="card rounded-md p-3 sm:p-6 flex gap-2">
    //   <i className={`text-7xl sm:mr-1 icon-alarm`} />
    //   Seu alarme está ativo
    // </div>
    <div className="card rounded-md p-3 sm:p-6 flex flex-1 gap-2 content-between">
      <i className={`text-6xl sm:mr-1 icon-alarm self-center mx-2`} />
      <div className="flex flex-col flex-grow justify-center">
        <span className="card-title">Alarme</span>
        <h3 className="card-subtitle">
          Quando ativo, você pode pré-programar as rotinas da casa via sensores.
        </h3>
      </div>
      {togglable && (
        <div className="card-switch">
          <Switch />
        </div>
      )}
    </div>
  );
};

export default AlarmCard;
