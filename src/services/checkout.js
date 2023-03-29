import { loadStripe } from "@stripe/stripe-js";

const createCheckoutSession = async (priceId) => {
  console.log(process.env);
  const response = await fetch(
    `https://awaken-0ki-staging.begin.app/checkout-session`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: 1,
        priceId,
      }),
    }
  );

  return await response.json();
};

const checkout = async (priceId) => {
  const { sessionId } = await createCheckoutSession(priceId);
  const stripe = await loadStripe('pk_test_51MqS08IL1RnG9G8fP4NbgSTt6ebLvAQFhcq17resXrH5OcsRKEzFZa7nNEXwLzrSIAH0gsu8H1xuTljLHWhI3L4i00twN6UKv5');
  await stripe.redirectToCheckout({
    sessionId,
  });
};

export { checkout };
