const handlePriceColor = (last: number, current: number): string => {
  if (last > current) {
    return "#BC345B";
  } else {
    return "#37BC34";
  }
};

export default handlePriceColor;
