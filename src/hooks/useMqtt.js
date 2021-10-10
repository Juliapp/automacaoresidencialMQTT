import { useContext } from 'use-context-selector';
import { MqttContext } from '../context/Connector';

export default function useMqtt() {
  const { connectionStatus, client } = useContext(MqttContext);
  return { connectionStatus, client };
}
