import {
  FaWrench,
  FaReact,
  FaFolder,
  FaEnvelope,
  // FaArrowUp,
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
  ImageContainer,
  ImageElement,
} from "@/components/base/iconText/IconTextElement";
import React from "react";

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
  // {
  //   linkName: "Update to SSO",
  //   icon: <FaArrowUp />,
  // },
  {
    linkName: "Logout",
    icon: <FaPowerOff />,
  },
];

const SideBarElement = (props) => {
  const { user, showActivePanel, setShowActivePanel, sidebarState } = props;
  const router = useRouter();

  return (
    <>
      {sidebarState ? (
        <DashboardSideBar>
          <LogoWrapperSideBar href="/dashboard">
            <Logo dashboard="true" size={100} />
          </LogoWrapperSideBar>
          <ProfileWrapper>
            <IconText
              image={user?.image ? user.image : profileImage}
              title={user?.firstname + " " + user?.lastname}
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
                alt={user?.firstname}
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
      ) : null}
    </>
  );
};

export default SideBarElement;
