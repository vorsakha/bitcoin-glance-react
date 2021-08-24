import useRest from "../../hooks/useRest";
import { SpinnerScoped } from "../common/Spinner";
import { Title, TitleH3 } from "../common/Title";
import { WrapperMarginY } from "../common/Wrapper";
import { Glance } from "./RESTSection.style";

const RESTSection = ({ currency }: { currency: string }) => {
  const four = useRest(currency);
  const day = useRest(currency, 240, "1d");
  const week = useRest(currency, 240, "1w");

  return (
    <WrapperMarginY>
      <Title>Market Glance:</Title>

      <TitleH3>
        Short Term{" - "}
        <Glance style={{ color: four.signalObj?.color }}>
          {four.loading ? <SpinnerScoped /> : four.signalObj?.signal}
        </Glance>
      </TitleH3>
      <TitleH3>
        Medium Term{" - "}
        <Glance style={{ color: day.signalObj?.color }}>
          {day.loading ? <SpinnerScoped /> : day.signalObj?.signal}
        </Glance>
      </TitleH3>
      <TitleH3>
        Long Term{" - "}
        <Glance style={{ color: week.signalObj?.color }}>
          {week.loading ? <SpinnerScoped /> : week.signalObj?.signal}
        </Glance>
      </TitleH3>
    </WrapperMarginY>
  );
};

export default RESTSection;
