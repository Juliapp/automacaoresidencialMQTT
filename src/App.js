import './App.css';
import { useState } from 'react';

function App() {
  const [lampadaJardim, setlampadaJardim] = useState(false);
  const [lampadaGaragem, setlampadaGaragem] = useState(false);
  const [ar, setar] = useState(false);
  const [alarme, setalarme] = useState(false);

  const toggleConvert = (value) => {
    return value ? 'Ligado' : 'Desligado';
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="">Lâmpada Garagem: {toggleConvert(lampadaGaragem)}</p>
        <button
          className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
          onClick={() => setlampadaGaragem(!lampadaGaragem)}
        >
          Toggle
        </button>

        <p>Lâmpada Jardim: {toggleConvert(lampadaJardim)}</p>
        <button onClick={() => setlampadaJardim(!lampadaJardim)}>Toggle</button>

        <p>Ar condicionado: {toggleConvert(ar)}</p>
        <button onClick={() => setar(!ar)}>Toggle</button>

        <p>Alarme: {toggleConvert(alarme)}</p>
        <button onClick={() => setalarme(!alarme)}>Toggle</button>
      </header>
    </div>
  );
}

export default App;
