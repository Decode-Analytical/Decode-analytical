export const currencyFormatter = (amount) =>
  amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });
