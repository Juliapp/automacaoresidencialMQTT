import { useContext } from 'use-context-selector';
import { MqttContext } from '../context/Connector';

export default function useMqtt() {
  const {
    connectionStatus,
    statusRasp,
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
    statusRasp,
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
