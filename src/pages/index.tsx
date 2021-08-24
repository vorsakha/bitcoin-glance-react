import Navigation from "../components/Navigation";
import RESTSection from "../components/RESTSection";
import WebsocketSection from "../components/WebsocketSection";

const Home = () => {
  return (
    <div>
      <Navigation />

      <main>
        <WebsocketSection currency="usd" />

        <RESTSection />
      </main>
    </div>
  );
};

export default Home;
