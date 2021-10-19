import React, { useRef, useState } from 'react';
import useMqtt from '../../../hooks/useMqtt';

const Garagem = ({ setOpen }) => {
  const { client, garagemLuzMax, garagemLuzMin } = useMqtt();

  const cancelButtonRef = useRef(null);

  const [minValue, setMinValue] = useState(
    `${garagemLuzMin < 10 ? '0' + garagemLuzMin : garagemLuzMin}:00`
  );
  const [maxValue, setMaxValue] = useState(
    `${garagemLuzMax < 10 ? '0' + garagemLuzMax : garagemLuzMax}:00`
  );

  const handleMaxMin = () => {
    if (minValue && maxValue) {
      const max = parseInt(maxValue.split(':')[0]);
      const min = parseInt(minValue.split(':')[0]);
      client.publish('GARAGEM/ILUMINACAO/HORARIOMAXIMO', max, 2, false);
      client.publish('GARAGEM/ILUMINACAO/HORARIOMINIMO', min, 2, false);
    }
    setOpen(false);
  };

  const handleOnMinChange = (e) => {
    e.preventDefault();
    const hour = e.target.value.split(':')[0] + ':00';
    setMinValue(hour);
  };

  const handleOnMaxChange = (e) => {
    e.preventDefault();
    const hour = e.target.value.split(':')[0] + ':00';
    setMaxValue(hour);
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-900">
      <span className="flex justify-center dark:text-gray-50">Garagem</span>
      <label className="block text-gray-500 text-sm font-bold mb-2">
        O garagem funciona em um intervalo de tempo durante o dia.
      </label>
      <label className="block text-gray-500 text-sm font-bold mb-2">
        Horário Mínimo
      </label>
      <input
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="max"
        type="time"
        max="24:00"
        placeholder="value"
        onChange={handleOnMinChange}
        value={minValue}
      />
      <label className="block text-gray-500 text-sm font-bold mb-2 mt-4">
        Horário Máximo
      </label>
      <input
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="min"
        type="time"
        max="24:00"
        step="3600"
        placeholder="value"
        onChange={handleOnMaxChange}
        value={maxValue}
      />

      <div className="mt-4 bg-gray-200 dark:bg-gray-900 py-3 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700  sm:ml-3 sm:w-auto sm:text-sm"
          onClick={handleMaxMin}
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

export default Garagem;
