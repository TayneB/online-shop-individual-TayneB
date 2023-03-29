const getProducts = async () => {
  // TODO Fetch products and prices from the Stripe API
  // Use the following URL for your fetch request
  const url = await fetch `${process.env.REACT_APP_API_URL}/products`;
  

  console.log(url);

  const products = [];

  return products;
};

export { getProducts };
