import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/products/Products';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </>

  );
}

export default App;
