import useWebsocket from "../../hooks/useWebsocket";
import formatCurrency from "../../utils/formatCurrency";
import { SpinnerScoped } from "../common/Spinner";
import { Title } from "../common/Title";
import { Price } from "./WebsocketSection.style";

const WebsocketSection = ({ currency }: { currency: "brl" | "usd" }) => {
  const { color, price } = useWebsocket(currency);

  return (
    <>
      <Title>
        Updated Price:{" "}
        <Price data-testid="price" style={{ color: color }}>
          {price === 0 ? (
            <SpinnerScoped role="alert" />
          ) : (
            formatCurrency(currency, price)
          )}
        </Price>
      </Title>
    </>
  );
};

export default WebsocketSection;
