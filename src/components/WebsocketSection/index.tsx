import useWebsocket from "../../hooks/useWebsocket";
import formatCurrency from "../../utils/formatCurrency";
import { SpinnerScoped } from "../common/Spinner";
import { Title } from "../common/Title";
import { Price } from "./WebsocketSection.style";

const WebsocketSection = ({ currency }: { currency: "brl" | "usd" }) => {
  const websocket = useWebsocket(currency);

  return (
    <>
      <Title>
        Updated Price:{" "}
        <Price data-testid="price" style={{ color: websocket.color }}>
          {websocket.price === 0 ? (
            <SpinnerScoped role="alert" />
          ) : (
            formatCurrency(currency, websocket.price)
          )}
        </Price>
      </Title>
    </>
  );
};

export default WebsocketSection;
