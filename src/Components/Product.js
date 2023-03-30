import { checkout } from '../services/checkout.js';

const Product = ({
  priceID,
  image,
  named,
  description,
  rarity,
  price,
  type,
}) => { 
    if ( priceID === undefined |
        image === undefined |
        named === undefined |
        description === undefined |
        rarity === undefined |
        price === undefined |
        type === undefined) {} else {
  const onClick = () => {
    checkout(priceID);
  };
  return (
    <li>
      <img src={image} alt={named}></img>
      <h2>{named}</h2>
      <h3>
        Rarity: {rarity} | Type: {type}
      </h3>
      <p>{description}</p>
      <button onClick={onClick}>Buy now {price} Gold Pieces</button>
    </li>
  );
}};

export default Product;
