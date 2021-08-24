import { Title, TitleH3 } from "../components/common/Title";
import { WrapperMarginY } from "../components/common/Wrapper";

const About = () => {
  return (
    <WrapperMarginY>
      <Title>About</Title>
      <p>
        Bitcoin Glance calculates Bitcoin market history to get a glance at the
        current conditions, depending on specific time frames.
      </p>
      <TitleH3>Calculations</TitleH3>
      <p>
        We use Ichimoku Kinkō Hyō as base of calculations and with the data
        coming of Binance Exchange API, we use all the trend catching
        capabilities of the Ichimoku framework to establish the current trend
        conditions of the Bitcoin market.
      </p>
      <TitleH3>Time Frames</TitleH3>
      <p>
        Bitcoin Glance use specific time frames for analyzing data: 4 hours, 1
        day and 1 week. We understand that with these time intervals you can
        have a good quick perspective for short, medium and long term market
        trends.
      </p>
      <TitleH3>Legal Disclaimer</TitleH3>
      <p>
        This app is for information purposes only. It is not intended to be
        investment advice. Seek a duly licensed professional for investment
        advice.
      </p>
    </WrapperMarginY>
  );
};

export default About;
