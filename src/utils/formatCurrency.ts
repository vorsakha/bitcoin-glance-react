const formatCurrency = (currency: string, amount: number): string => {
  const decimal = new Intl.NumberFormat("en-US", { style: "decimal" }).format(
    amount
  );

  if (currency === "brl") {
    return `R$` + decimal;
  }

  return `$` + decimal;
};

export default formatCurrency;
