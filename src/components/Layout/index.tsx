import { HelmetProvider } from "react-helmet-async";
import GlobalStyles from "../../styles/GlobalStyles";
import { Wrapper } from "../common/Wrapper";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";
import { Container } from "./Layout.styles";

const Layout: React.FC = ({ children }) => {
  return (
    <HelmetProvider>
      <Wrapper>
        <Header />
        <Navigation />
        <Container>
          <GlobalStyles />
          {children}
        </Container>
        <Footer />
      </Wrapper>
    </HelmetProvider>
  );
};

export default Layout;
