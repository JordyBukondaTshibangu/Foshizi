import { LogoContainer, ImageEl } from "./LogoElement";
import ImageLogo from "../../../../assets/images/FoshiziLogo.png";

const Logo = ({ dashboard, size }) => {
  return (
    <LogoContainer dashboard={dashboard}>
      <ImageEl
        src={ImageLogo}
        alt="logo-image"
        dashboard={dashboard}
        width={dashboard}
        height={dashboard}
        priority
      />
    </LogoContainer>
  );
};

export default Logo;
