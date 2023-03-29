const getProducts = async () => {
  // Fetches products from stripe api
  // TODO update this to the env variable
  const url = await fetch `${process.env.REACT_APP_API_URL}/products`;
  const response = await url.json();

  const products = response;

  return products;
};

export { getProducts };
