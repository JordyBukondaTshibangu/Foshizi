import { useState } from "react";
import SideBar from "../../ui/sideBar";
import Header from "@/components/ui/header";
import SettingPanel from "@/components/ui/panels/SettingPanel";
import AccountPanel from "@/components/ui/panels/AccountPanel";
import LibraryPanel from "@/components/ui/panels/LibraryPanel";
import ContactPanel from "@/components/ui/panels/ContactPanel";
import UpdateSSOPanel from "@/components/ui/panels/UpdateSSOPanel";
import Logout from "@/components/ui/panels/LogoutPanel";
import {
  DashboardWrapper,
  DashboardMain,
  MainContent,
} from "./DashboardElement";
import { signOut } from "next-auth/react";

import ViewSurveyPanel from "@/components/ui/panels/ViewSurveyPanel";

const Dashboard = ({ user, surveys, users }) => {
  const [sidebarState, setSideBarState] = useState(true);
  const [showActivePanel, setShowActivePanel] = useState("Overview");

  const toggleSidebarState = () => setSideBarState(!sidebarState);
  const closeSideBar = () => {
    if (screen.width <= 768) {
      setSideBarState(false);
    }
  };

  return (
    <DashboardWrapper>
      <SideBar
        user={user}
        sidebarState={sidebarState}
        setSideBarState={toggleSidebarState}
        showActivePanel={showActivePanel}
        setShowActivePanel={setShowActivePanel}
      />
      <DashboardMain>
        <Header
          user={user}
          toggleSidebarState={toggleSidebarState}
          setShowActivePanel={setShowActivePanel}
        />
        <MainContent onClick={closeSideBar} sideBarOpen={sidebarState}>
          {showActivePanel === "Overview" ? (
            <SettingPanel users={users} user={user} />
          ) : showActivePanel === "My Account" ? (
            <AccountPanel user={user} />
          ) : showActivePanel === "Library" ? (
            <LibraryPanel />
          ) : showActivePanel === "Contacts" ? (
            <ContactPanel user={user} />
          ) : showActivePanel === "Update to SSO" ? (
            <UpdateSSOPanel />
          ) : showActivePanel === "Logout" ? (
            <Logout onClick={signOut()} />
          ) : (
            <ViewSurveyPanel />
          )}
        </MainContent>
      </DashboardMain>
    </DashboardWrapper>
  );
};

export default Dashboard;
