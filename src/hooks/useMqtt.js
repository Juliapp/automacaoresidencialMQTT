import { useContext } from 'use-context-selector';
import { MqttContext } from '../context/Connector';

export default function useMqtt() {
  const {
    connectionStatus,
    client,
    automaticMode,
    alarm,
    ausenciaPessoas,
    acMax,
    acMin,
    acTemperatura,
    ac,
    acReset,
    garagemLuzMax,
    garagemLuzMin,
    garagemLuz,
    internoLuz,
    jardimLuzMax,
    jardimLuzMin,
    jardimLuz,
  } = useContext(MqttContext);
  return {
    connectionStatus,
    client,
    automaticMode,
    alarm,
    ausenciaPessoas,
    acMax,
    acMin,
    acTemperatura,
    ac,
    acReset,
    garagemLuzMax,
    garagemLuzMin,
    garagemLuz,
    internoLuz,
    jardimLuzMax,
    jardimLuzMin,
    jardimLuz,
  };
}
