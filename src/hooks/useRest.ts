import { useEffect, useState } from "react";
import * as querystring from "querystring";
import getIchimoku from "../utils/handleIchimoku";

// Rest
const apiUrl = "https://api.binance.com/api";
const defaultInterval = "4h";
const defaultSymbol = "BTCUSDT";
const defaultLimit = 120 * 2;

interface RestObjType {
  open: string[];
  high: string[];
  low: string[];
  close: string[];
}
interface SignalType {
  signal: string;
  color: string;
}

const useRest = (
  symbol: string = defaultSymbol,
  limit: number = defaultLimit,
  interval: string = defaultInterval
) => {
  const [restObj, setRestObj] = useState<RestObjType>({
    open: [],
    high: [],
    low: [],
    close: [],
  });
  const [signalObj, setSignal] = useState<SignalType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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

  const apiCall = async () => {
    setLoading(true);

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

    if (open.length !== 0) {
      setRestObj({
        open: open,
        high: high,
        low: low,
        close: close,
      });

      setLoading(false);
    }
  };

  // Glance status from ichimoku analysis
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getSignal = () => {
    try {
      const kumo = getIchimoku({
        close: restObj.close,
        high: restObj.high,
        low: restObj.low,
      });

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
        setSignal({ signal: "📈Bullish Trend", color: "#37BC34" });
      } else if (bearish) {
        setSignal({ signal: "📉Bearish Trend", color: "#BC345B" });
      } else {
        setSignal({ signal: "Neutral Trend", color: "#333" });
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
    async function asyncCall() {
      await apiCall();
    }

    asyncCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getSignal();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restObj]);

  console.log(restObj);

  return { signalObj, loading };
};

export default useRest;
