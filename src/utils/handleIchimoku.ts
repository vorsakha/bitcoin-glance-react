import getHL from "./smaHighsLows";

const getIchimoku = (
  data: { close: string[]; high: string[]; low: string[] },
  lengthOne = 20,
  lengthTwo = 60,
  lengthThree = 120
) => {
  const getChikou = () => {
    // Get data from api and Ichimoku
    const price: number = parseFloat(high[31]);
    const chikou: number = parseFloat(close[1]);
    let tenkan: number = getHL(high, low, lengthOne + 30, 31);
    let kijun: number = getHL(high, low, lengthTwo + 30, 31);
    let spanA: number =
      (getHL(high, low, lengthOne + 60, 61) +
        getHL(high, low, lengthTwo + 60, 61)) /
      2;
    let spanB: number = getHL(high, low, lengthThree + 60, 61);

    let result: string;

    // Chikou parameters
    if (
      chikou > price &&
      chikou > tenkan &&
      chikou > kijun &&
      chikou > spanA &&
      chikou > spanB
    ) {
      result = "BULL";
    } else if (
      chikou < price &&
      chikou < tenkan &&
      chikou < kijun &&
      chikou < spanA &&
      chikou < spanB
    ) {
      result = "BEAR";
    } else {
      result = "BAD";
    }

    // return Chikou state
    return result;
  };

  // Data from api
  const close: string[] = data.close;
  const high: string[] = data.high;
  const low: string[] = data.low;

  //   if (close.length < 240) {
  //     document.getElementById("alert").innerText =
  //       "Low available data, glances might not be as precise.";
  //   } else {
  //     document.getElementById("alert").innerText = "";
  //   }

  // Ichimoku calculations
  const tenkan: number = getHL(high, low, lengthOne);
  const kijun: number = getHL(high, low, lengthTwo);
  const spanA: number =
    (getHL(high, low, lengthOne + 30, 31) +
      getHL(high, low, lengthTwo + 30, 31)) /
    2;
  const spanB: number = getHL(high, low, lengthThree + 30, 31);
  const spanAFuture: number = (tenkan + kijun) / 2;
  const spanBFuture: number = getHL(high, low, lengthThree);
  const chikou: string = getChikou();

  // return ichi calculations
  return {
    price: parseFloat(close[1]),
    tenkan: tenkan,
    kijun: kijun,
    spanAPast: spanA,
    spanBPast: spanB,
    spanAFuture: spanAFuture,
    spanBFuture: spanBFuture,
    chikou: chikou,
  };
};

export default getIchimoku;
