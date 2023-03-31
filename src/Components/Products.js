import Product from './Product';

const Products = ({ products }) => {
  return (
    <ul className="product-grid">
      {products.map((products) => (
        <Product
          id={products.id}
          priceID={products.prices[0].id}
          image={products.images[0]}
          named={products.name}
          description={products.description}
          price={products.prices[0].unit_amount}
          rarity={products.metadata.rarity}
          type={products.metadata.type}
        />
      ))}d
    </ul>
  );
};
export default Products;
