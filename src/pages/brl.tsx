import { Helmet } from "react-helmet";

import { CenterWrapper } from "../components/common/Wrapper";
import RESTSection from "../components/RESTSection";
import WebsocketSection from "../components/WebsocketSection";

const Brl = () => {
  return (
    <>
      <Helmet>
        <title>Bitcoin Glance BRL</title>
      </Helmet>
      <CenterWrapper>
        <WebsocketSection currency="brl" />

        <RESTSection currency="BTCBRL" />
      </CenterWrapper>
    </>
  );
};

export default Brl;
