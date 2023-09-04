import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ItemDetailContainer from './pages/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';


function App() {
  return (
    <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/products/:category' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer/>
    </>

  );
}

export default App;
