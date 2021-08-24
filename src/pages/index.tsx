import { WrapperMarginY } from "../components/common/Wrapper";
import RESTSection from "../components/RESTSection";
import WebsocketSection from "../components/WebsocketSection";

const Home = () => {
  return (
    <>
      <WrapperMarginY>
        <WebsocketSection currency="usd" />

        <RESTSection currency="BTCUSDT" />
      </WrapperMarginY>
    </>
  );
};

export default Home;
