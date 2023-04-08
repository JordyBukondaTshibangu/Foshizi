import {
  FaWrench,
  FaReact,
  FaFolder,
  FaEnvelope,
  FaArrowUp,
  FaPowerOff,
} from "react-icons/fa";
import {
  DashboardSideBar,
  Wrapper,
  Title,
  ProfileWrapper,
  UserProfile,
  LogoWrapperSideBar,
} from "./SideBarElement";
import IconSideLink from "@/components/base/iconSideLink";
import Logo from "@/components/base/logo";
import IconText from "@/components/base/iconText";
import profileImage from "../../../../assets/images/profile.png";
import { useRouter } from "next/router";
import {
  ContentWrapper,
  ImageContainer,
  ImageElement,
  Subtitle,
} from "@/components/base/iconText/IconTextElement";

const links = [
  {
    linkName: "Overview",
    icon: <FaWrench />,
  },
  {
    linkName: "My Account",
    icon: <FaReact />,
  },
  {
    linkName: "Library",
    icon: <FaFolder />,
  },
  {
    linkName: "Contacts",
    icon: <FaEnvelope />,
  },
  {
    linkName: "Update to SSO",
    icon: <FaArrowUp />,
  },
  {
    linkName: "Logout",
    icon: <FaPowerOff />,
  },
];

const SideBarElement = (props) => {
  const { user, showActivePanel, setShowActivePanel } = props;
  const { push } = useRouter();

  if (!user) {
    push("/");
  }

  return (
    <DashboardSideBar>
      <LogoWrapperSideBar>
        <Logo dashboard="true" size={100} />
      </LogoWrapperSideBar>
      <ProfileWrapper>
        <IconText
          image={user?.image ? user.image : profileImage}
          title={user?.name}
          subtitle={user?.email}
          size={"200"}
        />
      </ProfileWrapper>
      <UserProfile>
        <ImageContainer big="100">
          <ImageElement
            src={user?.image ? user.image : profileImage}
            width="200"
            height="200"
            alt={user?.name}
          />
        </ImageContainer>
      </UserProfile>
      <Wrapper>
        <Title>Customize</Title>
        {links.map(({ linkName, icon }, index) => (
          <div onClick={() => setShowActivePanel(linkName)} key={index}>
            <IconSideLink
              linkName={linkName}
              linkIcon={icon}
              showActivePanel={showActivePanel === linkName}
            />
          </div>
        ))}
      </Wrapper>
    </DashboardSideBar>
  );
};

export default SideBarElement;
