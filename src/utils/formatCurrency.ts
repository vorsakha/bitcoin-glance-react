const formatCurrency = (currency: string, amount: number): string => {
  const decimal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  if (currency === "brl") {
    const decimal = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(amount);

    return decimal;
  }

  return decimal;
};

export default formatCurrency;
