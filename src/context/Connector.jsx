import Paho from 'paho-mqtt';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createContext } from 'use-context-selector';
import { v4 } from 'uuid';

export const MqttContext = createContext();

export default function Connector({ children }) {
  // const reconnect = (client) => {
  //   console.log('entrou no reconect');
  //   setTimeout(() => {
  //     console.log('entrou no setTimeout');
  //     setConnectionStatus({ status: 100, label: 'Reconectando...' });
  //     client.connect({
  //       onSuccess: () => {
  //         setConnectionStatus({ status: 200, label: 'Conectado' });
  //       },
  //       onFailure: () => {
  //         setConnectionStatus({ status: 400, label: 'Erro ao se conectar' });
  //       },
  //       password: process.env.REACT_APP_PASSWORD,
  //       userName: process.env.REACT_APP_USERNAME,
  //       useSSL: true,
  //     });
  //   }, 500);
  // };

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

// var options = {
//   host,
//   port,
//   protocol: 'mqtts',
//   username,
//   password,
// };
// var client = mqtt.connect(`mqtt://${host}:${port}`, options);
// client.on('connect', () => console.log('deu bom'));
// client.on('error', (err) => console.log(err));
// client.on('reconnect', () => console.log('reconnect'));

// var client = new Paho.Client('test.mosquitto.org', 8080, 'id');
// client.connect({
//   onSuccess: () => console.log('deu bom'),
//   onFailure: (err) => console.error('deu ruim', err),
// });

//   const mqttConnect = useCallback(async () => {
//     if (options) {
//       const c = connect(
//         options.hostname,
//         options.port,
//         options.protocol,
//         () => {
//           console.log('connection lost');
//         },
//         (msg) => {
//           console.log(msg);
//         }
//       );
//       setClient(c);
//     }
//   }, [options]);

//   useEffect(() => {
//     if (!client && options) {
//       mqttConnect();
//     }

//     return () => {
//       mountedRef.current = false;
//       client?.end(true);
//     };
//   }, [client, mqttConnect, options]);

//   return (
//     <MqttContext.Provider value={{ connectionStatus, client }}>
//       {children}
//     </MqttContext.Provider>
//   );
// }
//   const mqttConnect = useCallback(async () => {
//     // setConnectionStatus('Connecting');
//     // const mqtt = connect(brokerUrl, { options });
//     // mqtt.on('connect', () => {
//     //   if (mountedRef.current) {
//     //     setClient(mqtt);
//     //     setConnectionStatus('Connected');
//     //   }
//     // });
//     // mqtt.on('reconnect', () => {
//     //   if (mountedRef.current) {
//     //     setConnectionStatus('Reconnecting');
//     //   }
//     // });
//     // mqtt.on('error', (err) => {
//     //   if (mountedRef.current) {
//     //     console.log(`Connection error: ${err}`);
//     //     setConnectionStatus(err.message);
//     //   }
//     // });
//     // mqtt.on('offline', () => {
//     //   if (mountedRef.current) {
//     //     setConnectionStatus('Offline');
//     //   }
//     // });
//     // mqtt.on('end', () => {
//     //   if (mountedRef.current) {
//     //     setConnectionStatus('Offline');
//     //   }
//     // });
//   }, [options]);

//   useEffect(() => {
//     if (!client) {
//       mqttConnect();
//     }

//     return () => {
//       mountedRef.current = false;
//       client?.end(true);
//     };
//   }, [client, mqttConnect]);

//   return (
//     <MqttContext.Provider value={{ connectionStatus, client }}>
//       {children}
//     </MqttContext.Provider>
//   );
// }
