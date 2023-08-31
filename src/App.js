import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';


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
    </>

  );
}

export default App;
