const getProducts = async () => {
  // Fetches products from stripe api
  // TODO update this to the env variable
  const url = await fetch `https://awaken-0ki-staging.begin.app/products`;
  const response = await url.json();

  const products = response;

  return products;
};

export { getProducts };
