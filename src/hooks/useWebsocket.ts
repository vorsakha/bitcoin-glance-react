import { useEffect, useState } from "react";
import handlePriceColor from "../utils/handlePriceColor";

// Initialize Websocket
const binanceBRL = new WebSocket(
  "wss://stream.binance.com:9443/ws/btcbrl@trade"
);
const binanceUSD = new WebSocket(
  "wss://stream.binance.com:9443/ws/btcusdt@trade"
);

const useWebsocket = (currency: string) => {
  const [priceObj, setPrice] = useState<{
    price: number;
    color: string;
    currency: string;
  }>({ price: 0, color: "", currency: currency });

  const webSocket = currency === "usd" ? binanceUSD : binanceBRL;

  useEffect(() => {
    // websocket call
    webSocket.onmessage = (event) => {
      const jsonData = JSON.parse(event.data);
      const price: number = parseFloat(jsonData.p);

      setPrice((last) => ({
        price: parseFloat(price.toFixed(2)),
        color: handlePriceColor(last.price, price),
        currency: currency,
      }));
    };

    return () => {
      webSocket.close();
    };
  }, [currency, webSocket]);

  return priceObj;
};

export default useWebsocket;
