import { React, useEffect, useState } from 'react';
import './App.css';

import Products from './Components/Products.js';

// The function that makes the fetch request to the Products API
import { getProducts } from './services/getProducts';

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    loadData();
  }, []);
  console.log(products);
  console.log(`${process.env.REACT_APP_API_URL}`);
  /* Below code repition should be handled by a map function in it's own dedicated component but
  I have run out of time trying to figure out why my environmental variables dont work and why reloads crash everything */
  
   
    return (
      <div className="container">
        <h1>Yetans Magic Emporium</h1>
        <Products products={products}/>
      </div>
    );
    
}

export default App;


