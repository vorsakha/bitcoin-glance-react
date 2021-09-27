import useRest from "../../hooks/useRest";
import { Border } from "../common/Border";
import { Space, Ubuntu } from "../common/Font";
import { SpinnerScoped } from "../common/Spinner";
import { Title } from "../common/Title";
import { WrapperMarginY } from "../common/Wrapper";
import { GlanceWrapper } from "./RESTSection.style";

const RESTSection = ({
  currency,
  config = {},
}: {
  currency: "BTCBRL" | "BTCUSDT";
  config?: any;
}) => {
  const fourCall = useRest(currency);
  const dayCall = useRest(currency, 240, "1d");
  const weekCall = useRest(currency, 240, "1w");

  const four = config.rest || fourCall;
  const day = config.rest || dayCall;
  const week = config.rest || weekCall;

  return (
    <WrapperMarginY>
      <Title>Market Glance:</Title>

      <GlanceWrapper style={{ border: `1px solid ${four.signalObj?.border}` }}>
        <Ubuntu>Short Term</Ubuntu>
        <Border style={{ borderColor: `${four.signalObj?.border}` }} />

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
        <Border style={{ borderColor: `${day.signalObj?.border}` }} />

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
        <Border style={{ borderColor: `${week.signalObj?.border}` }} />

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
