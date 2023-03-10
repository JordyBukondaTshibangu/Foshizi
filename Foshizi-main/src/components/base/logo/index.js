import { LogoContainer, ImageEl } from "./LogoElement";
import ImageLogo from "../../../../assets/images/FoshiziLogo.png";

const Logo = ({ dashboard, size }) => {
  return (
    <LogoContainer dashboard={dashboard}>
      <ImageEl src={ImageLogo} alt="logo-image" dashboard={dashboard} />
    </LogoContainer>
  );
};

export default Logo;
