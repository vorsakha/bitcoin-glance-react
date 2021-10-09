import useSignal from "../../hooks/useSignal";
import { Border } from "../common/Border";
import { Space, Ubuntu } from "../common/Font";
import { SpinnerScoped } from "../common/Spinner";
import { Title } from "../common/Title";
import { WrapperMarginY } from "../common/Wrapper";
import { GlanceWrapper } from "./RESTSection.style";

const RESTSection = ({
  currency,
}: // config = {},
{
  currency: "BTCBRL" | "BTCUSDT";
  config?: any;
}) => {
  // const four: SignalTypes = config.rest || fourCall;
  // const day: SignalTypes = config.rest || dayCall;
  // const week: SignalTypes = config.rest || weekCall;

  const {
    signal: [shortTermSignal, mediumTermSignal, longTermSignal],
    loading,
    error,
  } = useSignal(currency);

  return (
    <WrapperMarginY>
      <Title>Market Glance:</Title>
      {error ? (
        <p>Error fetching data, try again later.</p>
      ) : (
        <>
          <GlanceWrapper
            style={{ border: `1px solid ${shortTermSignal.border}` }}
          >
            <Ubuntu>Short Term</Ubuntu>
            <Border style={{ borderColor: `${shortTermSignal.border}` }} />

            {loading ? (
              <SpinnerScoped role="alert" />
            ) : (
              <>
                <Space style={{ color: shortTermSignal.color }}>
                  {shortTermSignal.signal}
                </Space>
                <span style={{ color: shortTermSignal.color }}>
                  {shortTermSignal !== null && <shortTermSignal.icon />}{" "}
                </span>
              </>
            )}
          </GlanceWrapper>
          <GlanceWrapper
            style={{ border: `1px solid ${mediumTermSignal.border}` }}
          >
            <Ubuntu>Medium Term</Ubuntu>
            <Border style={{ borderColor: `${mediumTermSignal.border}` }} />

            {loading ? (
              <SpinnerScoped role="alert" />
            ) : (
              <>
                <Space style={{ color: mediumTermSignal.color }}>
                  {mediumTermSignal.signal}
                </Space>
                <span style={{ color: mediumTermSignal.color }}>
                  {mediumTermSignal !== null && <mediumTermSignal.icon />}{" "}
                </span>
              </>
            )}
          </GlanceWrapper>
          <GlanceWrapper
            style={{ border: `1px solid ${longTermSignal.border}` }}
          >
            <Ubuntu>Long Term</Ubuntu>
            <Border style={{ borderColor: `${longTermSignal.border}` }} />

            {loading ? (
              <SpinnerScoped role="alert" />
            ) : (
              <>
                <Space style={{ color: longTermSignal.color }}>
                  {longTermSignal.signal}
                </Space>
                <span style={{ color: longTermSignal.color }}>
                  {longTermSignal !== null && <longTermSignal.icon />}
                </span>
              </>
            )}
          </GlanceWrapper>
        </>
      )}
    </WrapperMarginY>
  );
};

export default RESTSection;
