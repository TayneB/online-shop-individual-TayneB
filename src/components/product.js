const Product = ({ image, name, description, rarity, type, price }) => {
    return (
      <li className="product-grid-item">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>{rarity}{type}</h4>
        <button>Buy now {price}</button>
      </li>
    );
  };

  export default Product;