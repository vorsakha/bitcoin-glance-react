import useWebsocket from "../../hooks/useWebsocket";
import formatCurrency from "../../utils/formatCurrency";
import { SpinnerScoped } from "../common/Spinner";
import { Title } from "../common/Title";
import { Price } from "./WebsocketSection.style";

const WebsocketSection = ({ currency }: { currency: string }) => {
  const websocket = useWebsocket(currency);

  return (
    <>
      <Title>
        Updated Price:{" "}
        <Price style={{ color: websocket.color }}>
          {websocket.price === 0 ? (
            <SpinnerScoped />
          ) : (
            formatCurrency(currency, websocket.price)
          )}
        </Price>
      </Title>
    </>
  );
};

export default WebsocketSection;
