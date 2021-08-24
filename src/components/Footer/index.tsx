import { Link } from "react-router-dom";
import Row from "../common/Row";
import { Wrapper } from "../common/Wrapper";
import { FooterContainer } from "./Footer.styled";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <FooterContainer>
        <Row>
          <Link to="/about">About</Link>
        </Row>
        <Row>
          <p>
            ©{year}
            <a href="https://github.com/vorsakha/" target="__blank">
              @vorsakha
            </a>
          </p>
        </Row>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;
