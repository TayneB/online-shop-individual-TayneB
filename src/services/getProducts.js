const getProducts = async () => {
  // Fetches products from stripe api
  // TODO update this to the env variable
  const url = await fetch `https://awaken-0ki-staging.begin.app/products`;
  const products = await url.json();
  if (products === undefined) {} else {

  return products; }
};

export { getProducts };
