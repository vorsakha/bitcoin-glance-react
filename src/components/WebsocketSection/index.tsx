import useWebsocket from "../../hooks/useWebsocket";
import { SpinnerScoped } from "../common/Spinner";
import { Title } from "../common/Title";
import { Price } from "./WebsocketSection.style";

const WebsocketSection = ({ currency }: { currency: string }) => {
  const websocket = useWebsocket(currency);

  return (
    <Title>
      Price Now:{" "}
      <Price style={{ color: websocket.color }}>
        {websocket.price === 0 ? <SpinnerScoped /> : websocket.price}
      </Price>
    </Title>
  );
};

export default WebsocketSection;
