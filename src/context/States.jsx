import { createContext } from 'use-context-selector';
import { useEffect, useState } from 'react';
import * as api from '../api';

export const StatesContext = createContext();
export default function State({ children }) {
  const [states, setStates] = useState();
  const [stateAC, setStateAC] = useState();
  const [stateJardim, setStateJardim] = useState();
  const [stateGaragem, setStateGaragem] = useState();
  const [stateInterno, setStateInterno] = useState();
  const [stateAlarme, setStateAlarme] = useState();

  useEffect(() => {
    if (!states) {
      api.getStates().then((data) => {
        setStates(data);
        const {
          ac_toggle,
          ac_valor_atual,
          ac_temp_max,
          ac_temp_min,
          ac_tempo_ausencia_pessoas,
          ac_reset,
          jardim_toggle,
          jardim_hora_max,
          jardim_hora_min,
          garagem_toggle,
          garagem_hora_max,
          garagem_hora_min,
          interno_toggle,
          alarme_toggle,
        } = data;

        setStateAC({
          status: ac_toggle,
          temperatura: ac_valor_atual,
          temp_max: ac_temp_max,
          ac_temp_min,
          ac_tempo_ausencia_pessoas,
          ac_reset,
        });

        setStateJardim({
          status: jardim_toggle,
          temp_max: jardim_hora_max,
          temp_min: jardim_hora_min,
        });

        setStateGaragem({
          status: garagem_toggle,
          temp_max: garagem_hora_max,
          temp_min: garagem_hora_min,
        });

        setStateInterno({ status: interno_toggle });

        setStateAlarme({ status: alarme_toggle });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StatesContext.Provider
      value={{ stateAC, stateJardim, stateGaragem, stateInterno, stateAlarme }}
    >
      {children}
    </StatesContext.Provider>
  );
}
