import { ButtonLink } from "../common/Button";
import { Banner } from "../common/Wrapper";

const Navigation = () => {
  return (
    <Banner>
      <ButtonLink to="/">USD</ButtonLink>
      <ButtonLink to="/brl">BRL</ButtonLink>
    </Banner>
  );
};

export default Navigation;
