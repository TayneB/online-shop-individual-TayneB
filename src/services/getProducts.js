const getProducts = async () => {
  // Fetches products from stripe api
  // TODO update this to the env variable ${process.env.REACT_APP_API_URL}
  const url = `https://awaken-0ki-staging.begin.app/products`;
  const response = await fetch(url);
  const products = await response.json();
  
  return products; 
};

export { getProducts };
