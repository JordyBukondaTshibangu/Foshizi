import Button from "@/components/base/button";
import SearchBar from "@/components/base/searchBar";
import {
  HeaderWrapper,
  WelcomeText,
  ButtonWrapper,
  IconWrapper,
  IconElement,
} from "./HeaderElement";
import { FaEnvelope, FaBell, FaBars, FaSearch } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Header = ({setShowActivePanel}) => {
  const { data: session } = useSession();

  if (session) {
    const { name } = session.user;
    return (
      <HeaderWrapper>
        <WelcomeText>Welcome, {name}</WelcomeText>
        <SearchBar />
        <ButtonWrapper>
          <Button
            btnText="View Survey"
            //link="create-survey"
            isBtn
            bg="primary"
            onClick={() => setShowActivePanel("View Survey")}
          />
          <Button btnText="Plans/Pricing" link="plans" bg="secondary" />
        </ButtonWrapper>
        <IconWrapper>
          <IconElement bg="grey">
            <FaSearch />
          </IconElement>
          <IconElement bg="green">
            <FaEnvelope />
          </IconElement>
          <IconElement bg="red">
            <FaBell />
          </IconElement>
          <IconElement>
            <FaBars />
          </IconElement>
        </IconWrapper>
      </HeaderWrapper>
    );
  }
};

export default Header;
