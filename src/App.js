// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// // import Home from './components/Home';
// import Products from './components/Products';
// import ProductItemDetails from './components/ProductItemDetails';
// import Home from './components/Home';
// // import ProductItems from './components/ProductItems';
// // import ProductItemDetails from './components/ProductItemDetails';
// import EmptyCart from './components/EmptyCart';
// import './App.css'

// const App = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/products/:id" element={<ProductItemDetails />} />
//       <Route path="/cart" element={<EmptyCart />} />
//     </Routes>
//   </BrowserRouter>
// );

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Correct import paths based on folder structure
import Products from './components/Products';
import ProductItemDetails from './components/ProductItemDetails';
import Home from './components/Home';
import EmptyCart from './components/EmptyCart';

import './App.css'; // Ensure App.css exists

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductItemDetails />} />
        <Route path="/cart" element={<EmptyCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
