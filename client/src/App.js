import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import HomeScreen from './components/home-screen/home-screen';
import ProductScreen from './components/product/product-screen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/product/:url' element={<ProductScreen/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
