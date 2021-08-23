import useWebsocket from "../../hooks/useWebsocket";

const CurrentPrice = () => {
  const websocket = useWebsocket("usd");

  return (
    <div>
      <strong style={{ color: websocket.color }}>{websocket.price}</strong>
    </div>
  );
};

export default CurrentPrice;
