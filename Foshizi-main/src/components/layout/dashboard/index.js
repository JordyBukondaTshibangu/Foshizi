import { useState } from "react";
import SideBar from "../../ui/sideBar";
import Header from "@/components/ui/header";
import SettingPanel from "@/components/ui/panels/SettingPanel";
import AccountPanel from "@/components/ui/panels/AccountPanel";
import LibraryPanel from "@/components/ui/panels/LibraryPanel";
import ContactPanel from "@/components/ui/panels/ContactPanel";
import UpdateSSOPanel from "@/components/ui/panels/UpdateSSOPanel";
import Logout from "@/components/ui/panels/LogoutPanel";
import { DashboardWrapper, DashboardMain } from "./DashboardElement";
import { signOut } from "next-auth/react";

const Dashboard = ({ user }) => {
  const [showActivePanel, setShowActivePanel] = useState("Settings");

  return (
    <DashboardWrapper>
      <SideBar
        user={user}
        showActivePanel={showActivePanel}
        setShowActivePanel={setShowActivePanel}
      />
      <DashboardMain>
        <Header user={user} />
        {showActivePanel === "Settings" ? (
          <SettingPanel />
        ) : showActivePanel === "My Account" ? (
          <AccountPanel />
        ) : showActivePanel === "Library" ? (
          <LibraryPanel />
        ) : showActivePanel === "Contacts" ? (
          <ContactPanel />
        ) : showActivePanel === "Update to SSO" ? (
          <UpdateSSOPanel />
        ) : showActivePanel === "Logout" ? (
          <Logout onClick={signOut()} />
        ) : null}
      </DashboardMain>
    </DashboardWrapper>
  );
};

export default Dashboard;
