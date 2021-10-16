import Paho from 'paho-mqtt';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createContext } from 'use-context-selector';
import { v4 } from 'uuid';

export const MqttContext = createContext();

export default function Connector({ children }) {
  const mountedRef = useRef(true);
  const [connectionStatus, setConnectionStatus] = useState({
    status: 100,
    label: 'Não conectado',
  });
  const [client, setClient] = useState();

  const mqttConnect = useCallback(async () => {
    setConnectionStatus({ status: 100, label: 'Conectando' });
    var client = new Paho.Client(
      process.env.REACT_APP_HOST,
      parseInt(process.env.REACT_APP_PORT),
      v4()
    );

    client.connect({
      onSuccess: () => {
        setConnectionStatus({ status: 200, label: 'Conectado' });
      },
      onFailure: () => {
        setConnectionStatus({ status: 400, label: 'Erro ao se conectar' });
      },
      password: process.env.REACT_APP_PASSWORD,
      userName: process.env.REACT_APP_USERNAME,
      useSSL: true,
      keepAliveInterval: 30,
      reconnect: true,
    });

    client.onConnectionLost = () => {
      setConnectionStatus({ status: 400, label: 'Conexão perdida' });
    };

    setClient(client);
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

  return (
    <MqttContext.Provider value={{ connectionStatus, client }}>
      {children}
    </MqttContext.Provider>
  );
}
