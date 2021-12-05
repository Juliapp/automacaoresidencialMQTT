import Paho from 'paho-mqtt';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createContext } from 'use-context-selector';
import { v4 } from 'uuid';
import * as api from '../api';
// import { CronJob } from 'cron';

export const MqttContext = createContext();
const TOPIC_ILUMINACAO_JARDIM = 'JARDIM/ILUMINACAO/VALOR';
const TOPIC_ILUMINACAO_JARDIM_MAX = 'JARDIM/ILUMINACAO/HORAMAX';
const TOPIC_ILUMINACAO_JARDIM_MIN = 'JARDIM/ILUMINACAO/HORAMIN';
const TOPIC_ILUMINACAO_INTERNO = 'INTERNO/ILUMINACAO/VALOR';
const TOPIC_ILUMINACAO_GARAGEM = 'GARAGEM/ILUMINACAO/VALOR';
const TOPIC_ILUMINACAO_GARAGEM_MAX = 'GARAGEM/ILUMINACAO/HORAMAX';
const TOPIC_ILUMINACAO_GARAGEM_MIN = 'GARAGEM/ILUMINACAO/HORAMIN';
const TOPIC_ARCONDICIONADO = 'AC/VALOR';
const TOPIC_ARCONDICIONADO_TEMPERATURA = 'AC/TEMPERATURA';
const TOPIC_ARCONDICIONADO_MAX = 'AC/TEMPERATURAMAX = ';
const TOPIC_ARCONDICIONADO_MIN = 'AC/TEMPERATURAMIN';
const TOPIC_ARCONDICIONADO_AUSENCIA_PESSOAS = 'AC/TEMPOAUSENCIAPESSOAS';
const TOPIC_ALARME = 'ALARME/VALOR';
const TOPIC_AUTOMATIC_MODE_VALOR = 'AUTOMATICMODE/VALOR';

const TOPIC_STATUS_RASP = 'PINGRESPONSE';

export default function Connector({ children }) {
  const [client, setClient] = useState();

  const [pastStates, setPastStates] = useState(false);

  const mountedRef = useRef(true);
  const [connectionStatus, setConnectionStatus] = useState({
    status: 100,
  });

  const [statusRasp, setStatusRasp] = useState({ status: 100 });

  const [automaticMode, setAutomaticMode] = useState(false);
  const [alarm, setAlarm] = useState(false);
  const [ausenciaPessoas, setAusenciaPessoas] = useState(false);
  const [acMax, setAcMax] = useState(false);
  const [acMin, setAcMin] = useState(false);
  const [acTemperatura, setAcTemperatura] = useState(false);
  const [ac, setAc] = useState(false);
  const [acReset, setAcReset] = useState(false);
  const [garagemLuzMax, setGaragemLuzMax] = useState(false);
  const [garagemLuzMin, setGaragemLuzMin] = useState(false);
  const [garagemLuz, setGaragemLuz] = useState(false);
  const [internoLuz, setInternoLuz] = useState(false);
  const [jardimLuzMax, setJardimLuzMax] = useState(false);
  const [jardimLuzMin, setJardimLuzMin] = useState(false);
  const [jardimLuz, setJardimLuz] = useState(false);
  const [timecron, setTimeCron] = useState(1);

  // // TOPICS TO PUBLISH
  //////////////////////// CONTROL VARIABLES

  const mqttConnect = useCallback(async () => {
    setConnectionStatus({ status: 100 });
    var instanceCliente = new Paho.Client(
      process.env.REACT_APP_HOST,
      parseInt(process.env.REACT_APP_PORT),
      v4()
    );

    instanceCliente.connect({
      onSuccess: () => {
        setConnectionStatus({ status: 200 });

        instanceCliente.subscribe(TOPIC_ILUMINACAO_JARDIM);
        instanceCliente.subscribe(TOPIC_ILUMINACAO_JARDIM_MAX);
        instanceCliente.subscribe(TOPIC_ILUMINACAO_JARDIM_MIN);
        instanceCliente.subscribe(TOPIC_ILUMINACAO_INTERNO);
        instanceCliente.subscribe(TOPIC_ILUMINACAO_GARAGEM);
        instanceCliente.subscribe(TOPIC_ILUMINACAO_GARAGEM_MAX);
        instanceCliente.subscribe(TOPIC_ILUMINACAO_GARAGEM_MIN);
        instanceCliente.subscribe(TOPIC_ARCONDICIONADO);
        instanceCliente.subscribe(TOPIC_ARCONDICIONADO_TEMPERATURA);
        instanceCliente.subscribe(TOPIC_ARCONDICIONADO_MAX);
        instanceCliente.subscribe(TOPIC_ARCONDICIONADO_MIN);
        instanceCliente.subscribe(TOPIC_ARCONDICIONADO_AUSENCIA_PESSOAS);
        instanceCliente.subscribe(TOPIC_ALARME);
        instanceCliente.subscribe(TOPIC_AUTOMATIC_MODE_VALOR);
        instanceCliente.subscribe(TOPIC_STATUS_RASP);

        // instanceCliente.publish('PINGREQUEST', 'pingrasp', 2, false);
        // cron(instanceCliente, 1);
      },
      onFailure: () => {
        setConnectionStatus({ status: 400 });
      },
      password: process.env.REACT_APP_PASSWORD,
      userName: process.env.REACT_APP_USERNAME,
      useSSL: true,
      keepAliveInterval: 30,
      reconnect: true,
    });

    instanceCliente.onConnectionLost = () => {
      setConnectionStatus({ status: 400 });
    };

    instanceCliente.onMessageArrived = function (message) {
      const { topic, payloadString: payload } = message;
      const convertedPayload = payload === '1';

      switch (topic) {
        case TOPIC_AUTOMATIC_MODE_VALOR:
          setAutomaticMode(convertedPayload);
          console.log(topic, payload);
          break;
        case TOPIC_ILUMINACAO_JARDIM:
          setJardimLuz(convertedPayload);
          break;
        case TOPIC_ILUMINACAO_JARDIM_MAX:
          setJardimLuzMax(payload);
          break;
        case TOPIC_ILUMINACAO_JARDIM_MIN:
          setJardimLuzMin(payload);
          break;
        case TOPIC_ILUMINACAO_INTERNO:
          setInternoLuz(convertedPayload);
          break;
        case TOPIC_ILUMINACAO_GARAGEM:
          setGaragemLuz(convertedPayload);
          break;
        case TOPIC_ILUMINACAO_GARAGEM_MAX:
          setGaragemLuzMax(payload);
          break;
        case TOPIC_ILUMINACAO_GARAGEM_MIN:
          setGaragemLuzMin(payload);
          break;
        case TOPIC_ARCONDICIONADO:
          setAc(convertedPayload);
          break;
        case TOPIC_ARCONDICIONADO_TEMPERATURA:
          setAcTemperatura(convertedPayload);
          break;
        case TOPIC_ARCONDICIONADO_MAX:
          setAcMax(payload);
          break;
        case TOPIC_ARCONDICIONADO_MIN:
          setAcMin(payload);
          break;
        case TOPIC_ARCONDICIONADO_AUSENCIA_PESSOAS:
          setAusenciaPessoas(convertedPayload);
          break;
        case TOPIC_ALARME:
          setAlarm(convertedPayload);
          break;
        default:
          break;
      }
    };

    setClient(instanceCliente);
  }, []);
  useEffect(() => {
    if (!client) {
      mqttConnect();
    }

    return () => {
      mountedRef.current = false;
      client?.end(true);
    };
  }, [client, mqttConnect]);

  useEffect(() => {
    if (!pastStates) {
      api.getStates().then((data) => {
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
          automatic_mode,
        } = data;

        setAutomaticMode(automatic_mode);
        setAlarm(alarme_toggle);
        setAusenciaPessoas(ac_tempo_ausencia_pessoas);
        setAcMax(ac_temp_max);
        setAcMin(ac_temp_min);
        setAcTemperatura(ac_valor_atual);
        setAc(ac_toggle);
        setGaragemLuzMax(garagem_hora_max);
        setGaragemLuzMin(garagem_hora_min);
        setGaragemLuz(garagem_toggle);
        setInternoLuz(interno_toggle);
        setJardimLuzMax(jardim_hora_max);
        setJardimLuzMin(jardim_hora_min);
        setJardimLuz(jardim_toggle);
        setAcReset(ac_reset);
      });

      api.getPing().then((value) => {
        value ? setStatusRasp({ status: 200 }) : setStatusRasp({ status: 400 });
      });

      api.getTimeCron().then((data) => {
        setTimeCron(data);
      });
      setPastStates(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('mandando pra api');
      api.getPing().then((value) => {
        value ? setStatusRasp({ status: 200 }) : setStatusRasp({ status: 400 });
      });
    }, timecron * 60 * 1000);
    return () => clearInterval(interval);
  }, [timecron]);

  return (
    <MqttContext.Provider
      value={{
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
      }}
    >
      {children}
    </MqttContext.Provider>
  );
}
