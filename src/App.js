import { useState } from 'react';
import AlarmCard from './components/AlarmCard';
import AutomaticMode from './components/AutomaticMode';
import Card from './components/Card';
import Header from './components/Header';
import useMqtt from './hooks/useMqtt';
import useStates from './hooks/useStates';

export default function App() {
  const [automaticMode, setAutomaticMode] = useState(false);
  const { stateAC, stateJardim, stateGaragem, stateInterno, stateAlarme } =
    useStates();

  const { client } = useMqtt();

  function handleACToggle(e) {
    client.publish('AC/TOGGLE', 'TOGGLE', 2, false);
  }

  function handleIluminacaoJardimToggle(e) {
    client.publish('JARDIM/ILUMINACAO/TOGGLE', 'TOGGLE', 2, false);
  }

  function handleIluminacaoGaragemToggle(e) {
    client.publish('GARAGEM/ILUMINACAO/TOGGLE', 'TOGGLE', 2, false);
  }

  function handleAlarmeToggle(e) {
    client.publish('ALARME/TOGGLE', 'TOGGLE', 2, false);
  }

  function handleIluminacaoInternaToggle(e) {
    client.publish('INTERNO/ILUMINACAO/TOGGLE', 'TOGGLE', 2, false);
  }

  return (
    <div className="container gap-4 mx-auto flex flex-col px-2 ">
      {/* <button type="button" onClick={() => handleClick('false')}>
        Disable led
      </button> */}
      <Header />

      <AutomaticMode
        automaticMode={automaticMode}
        setAutomaticMode={setAutomaticMode}
      />
      <AlarmCard
        togglable={!automaticMode}
        status={stateAlarme?.status}
        onClickButtonSwitch={handleAlarmeToggle}
      />
      <div className=" gap-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          icon="icon-air-conditioner"
          titulo="Ar Condicionado"
          descricao="Interno"
          togglable={!automaticMode}
          status={stateAC?.status}
          info={`${stateAC?.temperatura}°C`}
          onClickButtonSwitch={handleACToggle}
        />
        <Card
          icon="icon-lamp-bulb"
          titulo="Iluminação"
          descricao="Interna"
          togglable={!automaticMode}
          status={stateInterno?.status}
          onClickButtonSwitch={handleIluminacaoInternaToggle}
        />
        <Card
          icon="icon-garden-area"
          titulo="Iluminação"
          descricao="Jardim"
          togglable={!automaticMode}
          status={stateJardim?.status}
          onClickButtonSwitch={handleIluminacaoJardimToggle}
        />
        <Card
          icon="icon-garage-area"
          titulo="Iluminação"
          descricao="Garagem"
          togglable={!automaticMode}
          status={stateGaragem?.status}
          onClickButtonSwitch={handleIluminacaoGaragemToggle}
        />
      </div>
    </div>
  );
}
