import { useContext } from 'use-context-selector';
import { MqttContext } from '../context/Connector';

export default function useMqtt() {
  const {
    timecron,
    setTimeCron,
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
    timecron,
    setTimeCron,
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
