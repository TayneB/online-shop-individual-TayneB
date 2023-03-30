import { React, useEffect, useState } from 'react';
import './App.css';

import Product from './Components/Product.js';

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

  /* Below code repition should be handled by a map function in it's own dedicated component but
  I have run out of time trying to figure out why my environmental variables dont work and why reloads crash everything */
  
   
    return (
      <div className="container">
        <h1>Yetans Magic Emporium</h1>
        <ul>
          <Product
            priceID={products[0].prices[0].id}
            image={products[0].images[0]}
            named={products[0].name}
            description={products[0].description}
            price={products[0].prices[0].unit_amount}
            rarity={products[0].metadata.rarity}
            type={products[0].metadata.type}
          />
          <Product
            priceID={products[1].prices[0].id}
            image={products[1].images[0]}
            named={products[1].name}
            description={products[1].description}
            price={products[1].prices[0].unit_amount}
            rarity={products[1].metadata.rarity}
            type={products[1].metadata.type}
          />
          <Product
            priceID={products[2].prices[0].id}
            image={products[2].images[0]}
            named={products[2].name}
            description={products[2].description}
            price={products[2].prices[0].unit_amount}
            rarity={products[2].metadata.rarity}
            type={products[2].metadata.type}
          />
          <Product
            priceID={products[3].prices[0].id}
            image={products[3].images[0]}
            named={products[3].name}
            description={products[3].description}
            price={products[3].prices[0].unit_amount}
            rarity={products[3].metadata.rarity}
            type={products[3].metadata.type}
          />
          <Product
            priceID={products[4].prices[0].id}
            image={products[4].images[0]}
            named={products[4].name}
            description={products[4].description}
            price={products[4].prices[0].unit_amount}
            rarity={products[4].metadata.rarity}
            type={products[4].metadata.type}
          />
          <Product
            priceID={products[5].prices[0].id}
            image={products[5].images[0]}
            named={products[5].name}
            description={products[5].description}
            price={products[5].prices[0].unit_amount}
            rarity={products[5].metadata.rarity}
            type={products[5].metadata.type}
          />
        </ul>
      </div>
    );
    
}

export default App;
