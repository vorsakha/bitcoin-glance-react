import GlobalStyles from "../../styles/GlobalStyles";
import { Wrapper } from "../common/Wrapper";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";
import { Container } from "./Layout.styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Container>
        <GlobalStyles />
        {children}
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
