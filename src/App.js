import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Menu from './components/MenuCompo';
import Checkout from './pages/Checkout';
import Book from './pages/book';
import Payment from './pages/payment';
import { MenuData } from './components/MenuCompo/data';

function App() {
  return (
    <Routes>
      <Route exact path="/Menu" element={<Menu heading='Our Menu' data={MenuData} />} />
      <Route exact path="/payment" element={<Payment />} />
      <Route exact path="/book" element={<Book />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

const Home = () => {
  return <>
    <GlobalStyle />
    <Hero />
    <Products heading='Foods Available Now' data={productData} />
    <Feature />
    <Products heading='Specials Of The Day' data={productDataTwo} />
    <Contact />
    <Footer />
  </>
}


export default App;
