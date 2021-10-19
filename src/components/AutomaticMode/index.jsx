import React from 'react';
import useMqtt from '../../hooks/useMqtt';
import Switch from '../Switch';

const AutomaticMode = ({ setAutomaticMode, am }) => {
  const { client } = useMqtt();

  // const [automaticMode, setAutomaticModes] = useState(false);

  // const onToggle = () => {
  //   setAutomaticMode((prev) => !prev);
  // };

  const onToggle = () => {
    const state = !am;
    setAutomaticMode((prev) => !prev);
    client.publish(
      'AUTOMATICMODE/TOGGLE',
      state === true ? '1' : '0',
      2,
      false
    );
  };

  return (
    <div className="card rounded-md p-3 sm:p-6 flex flex-1 gap-2 content-between px-2">
      <i
        className={`text-6xl sm:mr-2 icon-app-menu self-center mx-2 transition duration-1000 dark:text-gray-100 text-gray-700`}
      />
      <div className="flex flex-col flex-grow justify-center">
        <span className="card-title">Modo Automático</span>
        <h3 className="card-subtitle">
          Quando ativo, você pode pré-programar as rotinas da casa via sensores,
          definindo horários e/ou temperatura do Ar Condicionado.
        </h3>
      </div>
      <div className="card-switch">
        <Switch checked={am} onChange={onToggle} />
      </div>
    </div>
  );
};

export default AutomaticMode;
