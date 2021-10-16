import { useContext } from 'use-context-selector';
import { StatesContext } from '../context/States';

export default function useStates() {
  const { stateAC, stateJardim, stateGaragem, stateInterno, stateAlarme } =
    useContext(StatesContext);
  return { stateAC, stateJardim, stateGaragem, stateInterno, stateAlarme };
}
