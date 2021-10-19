import React, { useRef } from 'react';

const LuzInterna = ({ setOpen }) => {
  const cancelButtonRef = useRef(null);

  return (
    <div className="bg-gray-200 dark:bg-gray-900">
      <span className="flex justify-center dark:text-gray-50">
        Luzes Internas
      </span>
      <label class="block text-gray-500 text-sm font-bold mb-2" for="username">
        A iluminação interna é controlada pelo sensor de presença de pessoas.
      </label>

      <div className="bg-gray-200 dark:bg-gray-900 py-3 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700  sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setOpen(false)}
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

export default LuzInterna;
