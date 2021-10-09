import { useCallback, useMemo } from "react";
import {
  BearishIcon,
  BullishIcon,
  StableIcon,
} from "../components/common/GlanceIcons";
import getIchimoku from "../utils/handleIchimoku";
import useBinanceRest from "./useBinanceRest";

const useSignal = (currency: "BTCBRL" | "BTCUSDT") => {
  const shortTimeFrameData = useBinanceRest(currency);
  const mediumTimeFrameData = useBinanceRest(currency, 240, "1d");
  const longTimeFrameData = useBinanceRest(currency, 240, "1w");

  const loading =
    shortTimeFrameData.loading ||
    mediumTimeFrameData.loading ||
    longTimeFrameData.loading;

  const error =
    shortTimeFrameData.error ||
    mediumTimeFrameData.error ||
    longTimeFrameData.error;

  const getSignal = useCallback(
    (
      tenkan,
      kijun,
      spanAFuture,
      spanAPast,
      spanBFuture,
      spanBPast,
      price,
      chikou
    ) => {
      // Signal parameters
      const bullish =
        tenkan > kijun &&
        spanAFuture > spanBFuture &&
        price > spanAPast &&
        price > spanBPast &&
        chikou === "BULL";

      const bearish =
        tenkan < kijun &&
        price < spanBPast &&
        price < spanAPast &&
        chikou === "BEAR";

      // Return parameters results
      let signalStyle;

      if (bullish) {
        signalStyle = {
          signal: "Bullish Trend",
          color: "#37BC34",
          icon: BullishIcon,
          border: "rgba(55, 188, 52, 0.3)",
        };
      } else if (bearish) {
        signalStyle = {
          signal: "Bearish Trend",
          color: "#BC345B",
          icon: BearishIcon,
          border: "rgba(188, 52, 91, 0.3)",
        };
      } else {
        signalStyle = {
          signal: `Neutral Trend`,
          color: "#333",
          icon: StableIcon,
          border: "rgba(99, 99, 99, 0.3)",
        };
      }

      return {
        ...signalStyle,
      };
    },
    []
  );

  const shortTimeFrameCalculations = useMemo(() => {
    return getIchimoku({
      close: shortTimeFrameData.apiData.close,
      high: shortTimeFrameData.apiData.high,
      low: shortTimeFrameData.apiData.low,
    });
  }, [shortTimeFrameData]);
  const mediumTimeFrameCalculations = useMemo(() => {
    return getIchimoku({
      close: mediumTimeFrameData.apiData.close,
      high: mediumTimeFrameData.apiData.high,
      low: mediumTimeFrameData.apiData.low,
    });
  }, [mediumTimeFrameData]);
  const longTimeFrameCalculations = useMemo(() => {
    return getIchimoku({
      close: longTimeFrameData.apiData.close,
      high: longTimeFrameData.apiData.high,
      low: longTimeFrameData.apiData.low,
    });
  }, [longTimeFrameData]);

  const shortTimeFrameSignal = getSignal(
    shortTimeFrameCalculations.tenkan,
    shortTimeFrameCalculations.kijun,
    shortTimeFrameCalculations.spanAFuture,
    shortTimeFrameCalculations.spanAPast,
    shortTimeFrameCalculations.spanBFuture,
    shortTimeFrameCalculations.spanBPast,
    shortTimeFrameCalculations.price,
    shortTimeFrameCalculations.chikou
  );
  const mediumTimeFrameSignal = getSignal(
    mediumTimeFrameCalculations.tenkan,
    mediumTimeFrameCalculations.kijun,
    mediumTimeFrameCalculations.spanAFuture,
    mediumTimeFrameCalculations.spanAPast,
    mediumTimeFrameCalculations.spanBFuture,
    mediumTimeFrameCalculations.spanBPast,
    mediumTimeFrameCalculations.price,
    mediumTimeFrameCalculations.chikou
  );
  const longTimeFrameSignal = getSignal(
    longTimeFrameCalculations.tenkan,
    longTimeFrameCalculations.kijun,
    longTimeFrameCalculations.spanAFuture,
    longTimeFrameCalculations.spanAPast,
    longTimeFrameCalculations.spanBFuture,
    longTimeFrameCalculations.spanBPast,
    longTimeFrameCalculations.price,
    longTimeFrameCalculations.chikou
  );

  return {
    signal: [shortTimeFrameSignal, mediumTimeFrameSignal, longTimeFrameSignal],
    loading,
    error,
  };
};

export default useSignal;
