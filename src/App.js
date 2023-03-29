import { React, useEffect, useState } from 'react';
import './App.css';

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

  return (
    <div className="container">
      <h1>Yetans Magic Emporium</h1>
      <ul>
        <li>
          <img src={products[0].image} alt={products[0].name}></img>
          <h2>{products[0].name}</h2>
          <h3>
            Rarity: {products[0].metadata.rarity} | Type:{' '}
            {products[0].metadata.type}
          </h3>
          <p>{products[0].description}</p>
          <button>Buy now {products[0].prices[0].unit_amount}</button>
        </li>
        <li>
          <img src={products[1].image} alt={products[1].name}></img>
          <h2>{products[1].name}</h2>
          <h3>
            Rarity: {products[1].metadata.rarity} | Type:{' '}
            {products[1].metadata.type}
          </h3>
          <p>{products[1].description}</p>
          <button>Buy now {products[1].prices[0].unit_amount}</button>
        </li>
        <li>
          <img src={products[2].image} alt={products[2].name}></img>
          <h2>{products[2].name}</h2>
          <h3>
            Rarity: {products[2].metadata.rarity} | Type:{' '}
            {products[2].metadata.type}
          </h3>
          <p>{products[2].description}</p>
          <button>Buy now {products[2].prices[0].unit_amount}</button>
        </li>
        <li>
          <img src={products[3].image} alt={products[3].name}></img>
          <h2>{products[2].name}</h2>
          <h3>
            Rarity: {products[3].metadata.rarity} | Type:{' '}
            {products[3].metadata.type}
          </h3>
          <p>{products[3].description}</p>
          <button>Buy now {products[3].prices[0].unit_amount}</button>
        </li>
        <li>
          <img src={products[4].image} alt={products[4].name}></img>
          <h2>{products[4].name}</h2>
          <h3>
            Rarity: {products[4].metadata.rarity} | Type:{' '}
            {products[4].metadata.type}
          </h3>
          <p>{products[4].description}</p>
          <button>Buy now {products[4].prices[0].unit_amount}</button>
        </li>
        <li>
          <img src={products[5].image} alt={products[5].name}></img>
          <h2>{products[5].name}</h2>
          <h3>
            Rarity: {products[5].metadata.rarity} | Type:{' '}
            {products[5].metadata.type}
          </h3>
          <p>{products[5].description}</p>
          <button>Buy now {products[5].prices[0].unit_amount}</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
