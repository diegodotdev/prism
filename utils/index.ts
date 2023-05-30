import { createClient } from "@sanity/client";
import { loadStripe } from "@stripe/stripe-js";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-05-28",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export const formatCurrency = (amount = 0, currency = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumIntegerDigits: 1,
  }).format(amount / 100);

let stripePromise: any = null;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
    );
  }
  return stripePromise;
};

export default getStripe;

export const windowWidth = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
};

export const windowHeight = () => {
  if (typeof window !== "undefined") {
    return window.innerHeight;
  }
};

export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
