import { Helmet } from "react-helmet";

import { WrapperMarginY } from "../components/common/Wrapper";
import RESTSection from "../components/RESTSection";
import WebsocketSection from "../components/WebsocketSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bitcoin Glance</title>
      </Helmet>
      <WrapperMarginY>
        <WebsocketSection currency="usd" />

        <RESTSection currency="BTCUSDT" />
      </WrapperMarginY>
    </>
  );
};

export default Home;
