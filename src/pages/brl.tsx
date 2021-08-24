import { CenterWrapper } from "../components/common/Wrapper";
import RESTSection from "../components/RESTSection";
import WebsocketSection from "../components/WebsocketSection";

const Brl = () => {
  return (
    <CenterWrapper>
      <WebsocketSection currency="brl" />

      <RESTSection currency="BTCBRL" />
    </CenterWrapper>
  );
};

export default Brl;
