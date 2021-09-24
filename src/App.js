import Header from './components/Header';
import Card from './components/Card';
import useDarkMode from './hooks/useDarkMode';

export default function App() {
  useDarkMode(true);

  return (
    <div className="container mx-auto flex flex-col">
      <Header />
      <div className="px-2 md:px-0  gap-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card />
        <Card />
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
