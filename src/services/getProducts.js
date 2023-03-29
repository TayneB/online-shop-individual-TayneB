const getProducts = async () => {
  // TODO Fetch products and prices from the Stripe API
  // Use the following URL for your fetch request
  const url = await fetch `https://awaken-0ki-staging.begin.app/products`;
  const burl = await url.json();

  console.log(burl);

  const products = burl;

  return products;
};

export { getProducts };
