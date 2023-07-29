import './App.scss';
import ContactUS from './components/ContactUS';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <Header />
      <ContactUS />
      <ItemListContainer greeting="Bienvenido" />
    </>

  );
}

export default App;
