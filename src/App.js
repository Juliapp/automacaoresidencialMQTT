import Header from './components/Header';
import Card from './components/Card';
import AlarmCard from './components/AlarmCard';

export default function App() {
  return (
    <div className="container gap-4 mx-auto flex flex-col">
      {/* <i className="icon-lightning" /> */}
      <Header />
      <AlarmCard />
      <div className="px-2 md:px-0  gap-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          icon="icon-air-conditioner"
          titulo="Ar Condicionado"
          descricao="Quarto Principal"
        />
        <Card
          icon="icon-lamp-bulb"
          titulo="Iluminação"
          descricao="Sala de estar"
        />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
