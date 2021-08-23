import { useEffect, useState } from "react";
import * as querystring from "querystring";
import getIchimoku from "../utils/handleIchimoku";

// Rest
const apiUrl = "https://api.binance.com/api";
const defaultInterval = "4h";
const defaultSymbol = "BTCUSDT";
const defaultLimit = 120 * 2;

interface StateType {
  open: string[];
  high: string[];
  low: string[];
  close: string[];
}

const useRest = async (
  symbol: string = defaultSymbol,
  limit: number = defaultLimit,
  interval: string = defaultInterval
): Promise<boolean | null> => {
  const [restObj, setRestObj] = useState<StateType>({
    open: [],
    high: [],
    low: [],
    close: [],
  });
  const [isBull, setIsBull] = useState<boolean | null>(null);

  const publicCall = async (
    path: string,
    data: { symbol: string; limit: number; interval: string }
  ) => {
    try {
      const qs = data ? `?${querystring.stringify(data)}` : "";
      const response = await fetch(`${apiUrl}${path}${qs}`);
      const res = await response.json();

      return res;
    } catch (error) {
      if (error) {
        console.error(error);
      }
    }
  };

  async function apiCall() {
    const upperCaseSym = symbol.toUpperCase();
    const call: any = await publicCall("/v1/klines", {
      symbol: upperCaseSym,
      limit,
      interval,
    });

    const open: string[] = [];
    const high: string[] = [];
    const low: string[] = [];
    const close: string[] = [];

    call?.forEach((data: string[]) => {
      open.unshift(data[1]);
      high.unshift(data[2]);
      low.unshift(data[3]);
      close.unshift(data[4]);
    });

    setRestObj({
      open: open,
      high: high,
      low: low,
      close: close,
    });
  }

  useEffect(() => {
    apiCall();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ichimoku = getIchimoku({
    close: restObj.close,
    high: restObj.high,
    low: restObj.low,
  });

  // Glance status from ichimoku analysis
  const getSignal = () => {
    try {
      const kumo = ichimoku;

      // Signal parameters
      const bullish =
        kumo.tenkan > kumo.kijun &&
        kumo.spanAFuture > kumo.spanBFuture &&
        kumo.price > kumo.spanAPast &&
        kumo.price > kumo.spanBPast &&
        kumo.chikou === "BULL";

      const bearish =
        kumo.tenkan < kumo.kijun &&
        kumo.price < kumo.spanBPast &&
        kumo.price < kumo.spanAPast &&
        kumo.chikou === "BEAR";

      // Return parameters results
      if (bullish) {
        setIsBull(true);
      } else if (bearish) {
        setIsBull(false);
      } else {
        setIsBull(null);
      }

      return {
        bull: bullish,
        bear: bearish,
      };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSignal();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isBull;
};

export default useRest;
