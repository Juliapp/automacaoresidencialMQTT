import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [lampada, setlampada] = useState(false);
  const [ar, setar] = useState(false);
  const [alarme, setalarme] = useState(false);

  const toggleConvert = (value: boolean) => {
    return value ? 'Ligado' : 'Desligado';
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Lâmpadas: {toggleConvert(lampada)}</p>
        <button onClick={() => setlampada(!lampada)}>Toggle</button>

        <p>Ar condicionado: {toggleConvert(ar)}</p>
        <button onClick={() => setar(!ar)}>Toggle</button>

        <p>Alarme: {toggleConvert(alarme)}</p>
        <button onClick={() => setalarme(!alarme)}>Toggle</button>
      </header>
    </div>
  );
}

export default App;
