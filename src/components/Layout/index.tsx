import GlobalStyles from "../../styles/GlobalStyles";
import Wrapper from "../common/Wrapper";
import Footer from "../Footer";
import Header from "../Header";
import { Container } from "./Layout.styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <GlobalStyles />
        {children}
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
