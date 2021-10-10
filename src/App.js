import { useState } from 'react';
import AlarmCard from './components/AlarmCard';
import AutomaticMode from './components/AutomaticMode';
import Card from './components/Card';
import Header from './components/Header';
import useMqtt from './hooks/useMqtt';

export default function App() {
  const [automaticMode, setAutomaticMode] = useState(false);
  const { connectionStatus } = useMqtt();

  // function handleClick(message) {
  //   const payload = parsePayload('TOPICO', message);
  //   return client.send(payload);
  // }

  return (
    <div className="container gap-4 mx-auto flex flex-col px-2 ">
      {/* <button type="button" onClick={() => handleClick('false')}>
        Disable led
      </button> */}
      <Header />
      <h1>{`Status: ${connectionStatus.label}`}</h1>
      <AutomaticMode
        automaticMode={automaticMode}
        setAutomaticMode={setAutomaticMode}
      />
      <AlarmCard togglable={!automaticMode} />
      <div className=" gap-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          icon="icon-air-conditioner"
          titulo="Ar Condicionado"
          descricao="Interno"
          togglable={!automaticMode}
        />
        <Card
          icon="icon-lamp-bulb"
          titulo="Iluminação"
          descricao="Interna"
          togglable={!automaticMode}
        />
        <Card
          icon="icon-garden-area"
          titulo="Iluminação"
          descricao="Jardim"
          togglable={!automaticMode}
        />
        <Card
          icon="icon-garage-area"
          titulo="Iluminação"
          descricao="Garagem"
          togglable={!automaticMode}
        />
      </div>
    </div>
  );
}
