import React, { useRef, useState } from 'react';
import useMqtt from '../../../hooks/useMqtt';

const AC = ({ setOpen }) => {
  const { client, acMax, acMin } = useMqtt();

  const handleACDefault = () => {
    client.publish('AC/RESET', 'TOGGLE', 2, false);
    setOpen(false);
  };

  const cancelButtonRef = useRef(null);
  const [minPossible, setMinPossible] = useState();

  const [minValue, setMinValue] = useState(acMin);
  const [maxValue, setMaxValue] = useState(acMax);

  const handleACMaxMin = () => {
    if (minValue && maxValue) {
      client.publish('AC/SETTEMPERATURAMAX', maxValue, 2, false);
      client.publish('AC/SETTEMPERATURAMIN', minValue, 2, false);
    }
    setOpen(false);
  };

  const handleOnMinChange = (e) => {
    setMinValue(e.target.value);
    setMinPossible(e.target.value);
    if (maxValue < e.target.value) {
      setMaxValue(e.target.value);
    }
  };

  const handleOnMaxChange = (e) => {
    setMaxValue(e.target.value);
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-900">
      <span className="flex justify-center dark:text-gray-50">
        Ar Condicionado
      </span>
      <label className="block text-gray-500 text-sm font-bold mb-2">
        O ar condicionado irá desligar se não houver presença de pessoas.
      </label>
      <label className="block text-gray-500 text-sm font-bold mb-2">
        Valor Mínimo
      </label>
      <input
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="number"
        max="30"
        min="16"
        placeholder="value"
        onChange={handleOnMinChange}
        value={minValue}
      />
      <label className="block text-gray-500 text-sm font-bold mb-2 mt-4">
        Valor Máximo
      </label>
      <input
        className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="number"
        max="30"
        min={minPossible > 16 ? minPossible : 16}
        placeholder="value"
        onChange={handleOnMaxChange}
        value={maxValue}
      />
      <div className="flex justify-end my-3">
        <button
          type="button"
          className="mt-3 w-full inline-flex  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={handleACDefault}
          ref={cancelButtonRef}
        >
          Deseja voltar ao default?
        </button>
      </div>

      <div className="bg-gray-200 dark:bg-gray-900 py-3 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700  sm:ml-3 sm:w-auto sm:text-sm"
          onClick={handleACMaxMin}
        >
          Ok
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setOpen(false)}
          ref={cancelButtonRef}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default AC;
