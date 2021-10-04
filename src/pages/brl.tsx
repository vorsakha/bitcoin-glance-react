import { Helmet } from "react-helmet-async";

import { WrapperMarginY } from "../components/common/Wrapper";
import RESTSection from "../components/RESTSection";
import WebsocketSection from "../components/WebsocketSection";

const Brl = () => {
  return (
    <>
      <Helmet>
        <title>Bitcoin Glance BRL</title>
      </Helmet>
      <WrapperMarginY>
        <WebsocketSection currency="brl" />

        <RESTSection currency="BTCBRL" />
      </WrapperMarginY>
    </>
  );
};

export default Brl;
