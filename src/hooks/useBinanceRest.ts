import { useEffect, useState, useCallback } from "react";
import * as querystring from "querystring";

// Rest
const apiUrl = "https://api.binance.com/api";
const defaultInterval = "4h";
const defaultSymbol = "BTCUSDT";
const defaultLimit = 120 * 2;

const useBinanceRest = (
  symbol: string = defaultSymbol,
  limit: number = defaultLimit,
  interval: string = defaultInterval
) => {
  const [apiData, setApiData] = useState<RestObjType>({
    open: [],
    high: [],
    low: [],
    close: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const publicCall = useCallback(
    async (
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
          setError(error);
        }
      }
    },
    []
  );

  useEffect(() => {
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
        setApiData({
          open: open,
          high: high,
          low: low,
          close: close,
        });

        setLoading(false);
      }
    };

    async function asyncCall() {
      await apiCall();
    }

    asyncCall();
  }, [interval, limit, symbol, publicCall]);

  return { apiData, loading, error };
};

export default useBinanceRest;
