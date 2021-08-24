import useRest from "../../hooks/useRest";
import { Space, Ubuntu } from "../common/Font";
import { SpinnerScoped } from "../common/Spinner";
import { Title } from "../common/Title";
import { WrapperMarginY } from "../common/Wrapper";
import { GlanceWrapper } from "./RESTSection.style";

const RESTSection = ({ currency }: { currency: string }) => {
  const four = useRest(currency);
  const day = useRest(currency, 240, "1d");
  const week = useRest(currency, 240, "1w");

  return (
    <WrapperMarginY>
      <Title>Market Glance:</Title>

      <GlanceWrapper style={{ border: `1px solid ${four.signalObj?.border}` }}>
        <Ubuntu>Short Term</Ubuntu>
        {four.loading ? (
          <SpinnerScoped />
        ) : (
          <>
            <Space style={{ color: four.signalObj?.color }}>
              {four.signalObj?.signal}
            </Space>
            <span style={{ color: four.signalObj?.color }}>
              {four.signalObj !== null && <four.signalObj.icon />}{" "}
            </span>
          </>
        )}
      </GlanceWrapper>
      <GlanceWrapper style={{ border: `1px solid ${day.signalObj?.border}` }}>
        <Ubuntu>Medium Term</Ubuntu>

        {day.loading ? (
          <SpinnerScoped />
        ) : (
          <>
            <Space style={{ color: day.signalObj?.color }}>
              {day.signalObj?.signal}
            </Space>
            <span style={{ color: day.signalObj?.color }}>
              {day.signalObj !== null && <day.signalObj.icon />}{" "}
            </span>
          </>
        )}
      </GlanceWrapper>
      <GlanceWrapper style={{ border: `1px solid ${week.signalObj?.border}` }}>
        <Ubuntu>Long Term</Ubuntu>

        {week.loading ? (
          <SpinnerScoped />
        ) : (
          <>
            <Space style={{ color: week.signalObj?.color }}>
              {week.signalObj?.signal}
            </Space>
            <span style={{ color: week.signalObj?.color }}>
              {week.signalObj !== null && <week.signalObj.icon />}
            </span>
          </>
        )}
      </GlanceWrapper>
    </WrapperMarginY>
  );
};

export default RESTSection;
