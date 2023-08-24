import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/products/:category' element={<ItemListContainer />} />
        </Routes>
    </>

  );
}

export default App;
