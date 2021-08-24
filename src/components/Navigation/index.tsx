import { ButtonLink } from "../common/Button";
import { Banner } from "../common/Wrapper";

const Navigation = () => {
  return (
    <Banner>
      <ButtonLink exact to="/" activeStyle={{ backgroundColor: "#ca7900" }}>
        USD
      </ButtonLink>
      <ButtonLink to="/brl" activeStyle={{ backgroundColor: "#ca7900" }}>
        BRL
      </ButtonLink>
    </Banner>
  );
};

export default Navigation;
