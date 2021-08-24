import useWebsocket from "../../hooks/useWebsocket";
import { Title } from "../common/Title";

const WebsocketSection = ({ currency }: { currency: string }) => {
  const websocket = useWebsocket(currency);

  return (
    <Title>
      Price Now:{" "}
      <strong style={{ color: websocket.color }}>
        {websocket.price === 0 ? "loading..." : websocket.price}
      </strong>
    </Title>
  );
};

export default WebsocketSection;
