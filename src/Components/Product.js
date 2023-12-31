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
  const onClick = () => {
    checkout(priceID);
  };
  return (
    <li className={rarity}>
      <img src={image} alt={named}></img>
      <h2>{named}</h2>
      <h3>
        Rarity: {rarity} | Type: {type}
      </h3>
      <p>{description}</p>
      <button className='button' onClick={onClick}>Buy now {price} nzd</button>
    </li>
  );
};

export default Product;
