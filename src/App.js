import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero';
import ItemDetailContainer from './pages/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import { Checkout } from './pages/Checkout';
// import './DB/migration'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/products' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/products/:category' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
