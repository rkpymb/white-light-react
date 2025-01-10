import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/home/Footer'; 
import Home from './components/Home';
import ProductPage from './components/ProductPage'; 

 
import ParallaxPage from './components/home/subCat';
import CarouselAndCategories from './components/subsubcat'; 
import Pesto from './components/products';
import Kart from './components/kart';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />  
             <Route path="/product/:id" element={<ProductPage />} /> 
          <Route path="/category/:category" element={<ParallaxPage/>} />
          <Route path="/subcategory/:title" element={<CarouselAndCategories/>} />
          <Route path="/subsubcategory/:title" element={<Pesto />} />
          <Route path="/pro/:id" element={<Kart/>} />
           
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;