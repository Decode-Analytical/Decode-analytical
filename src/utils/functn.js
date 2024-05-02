export const currencyFormatter = (amount) =>
  amount
    ?.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    })
    .slice(0, -3);

export const validate = (schema, data) => {
  return schema.validate(data, { abortEarly: false }).then(
    () => {
      return { values: data, errors: {} };
    },
    (validationErrors) => {
      return {
        values: {},
        errors: validationErrors.inner.reduce((acc, error) => {
          acc[error.path] = {
            message: error.message,
            type: error.type,
          };
          return acc;
        }, {}),
      };
    }
  );
};
