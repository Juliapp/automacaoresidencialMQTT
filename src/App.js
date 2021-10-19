import React from 'react';
import AlarmCard from './components/AlarmCard';
import AutomaticMode from './components/AutomaticMode';
import Card from './components/Card';
import Header from './components/Header';
import AC from './components/ModaisChildrens/AC';
import LuzInterna from './components/ModaisChildrens/LuzInterna';
import useMqtt from './hooks/useMqtt';

export default function App() {
  // const [automaticMode, setAutomaticMode] = useState(false);

  const {
    client,
    alarm,
    // ausenciaPessoas,
    // acMax,
    // acMin,
    acTemperatura,
    ac,
    // garagemLuzMax,
    // garagemLuzMin,
    garagemLuz,
    internoLuz,
    // jardimLuzMax,
    // jardimLuzMin,
    automaticMode,
    jardimLuz,
  } = useMqtt();

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
    <div className="container gap-4 mx-auto flex flex-col px-2">
      {/* <button type="button" onClick={() => handleClick('false')}>
        Disable led
      </button> */}
      <Header />

      {/* <AutomaticMode
        automaticMode={automaticMode}
        setAutomaticMode={setAutomaticMode}
      /> */}

      <AutomaticMode am={automaticMode} />

      <span className="self-center text-base transition duration-1000 dark:text-gray-50">
        Dispositivos
      </span>
      <AlarmCard
        togglable={!automaticMode}
        status={alarm}
        onClickButtonSwitch={handleAlarmeToggle}
      />
      <div className=" gap-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          icon="icon-air-conditioner"
          titulo="Ar Condicionado"
          descricao="Interno"
          togglable={!automaticMode}
          status={ac}
          info={`${acTemperatura}°C`}
          onClickButtonSwitch={handleACToggle}
        >
          <AC />
        </Card>
        <Card
          icon="icon-lamp-bulb"
          titulo="Iluminação"
          descricao="Interna"
          togglable={!automaticMode}
          status={internoLuz}
          onClickButtonSwitch={handleIluminacaoInternaToggle}
        >
          <LuzInterna />
        </Card>
        <Card
          icon="icon-garden-area"
          titulo="Iluminação"
          descricao="Jardim"
          togglable={!automaticMode}
          status={jardimLuz}
          onClickButtonSwitch={handleIluminacaoJardimToggle}
        />
        <Card
          icon="icon-garage-area"
          titulo="Iluminação"
          descricao="Garagem"
          togglable={!automaticMode}
          status={garagemLuz}
          onClickButtonSwitch={handleIluminacaoGaragemToggle}
        />
      </div>
    </div>
  );
}
