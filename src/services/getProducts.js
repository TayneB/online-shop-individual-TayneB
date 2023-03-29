const getProducts = async () => {
  // TODO Fetch products and prices from the Stripe API
  // Use the following URL for your fetch request
  const url = await fetch `https://awaken-0ki-staging.begin.app/products`;
  const response = await url.json();

  const products = response;
  console.log(response);

  return products;
};

export { getProducts };
