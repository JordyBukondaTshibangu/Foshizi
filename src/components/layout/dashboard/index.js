import { useEffect, useState } from "react";
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
import { getAllAnswers, getAllSurveys } from "@/utils/surveyApi";
import { useDispatch } from "react-redux";
import { setSurveys } from "@/components/base/store/surveySlice";
import { setAnswers } from "@/components/base/store/answerSlice";

const Dashboard = ({ user, surveys, users }) => {
  const dispatch = useDispatch();

  const [sidebarState, setSideBarState] = useState(true);
  const [showActivePanel, setShowActivePanel] = useState("Overview");

  const getAllSurveys_Call = async () => {
    const surveys_ = await getAllSurveys()

    dispatch(setSurveys(surveys_))
    const answers_ = await getAllAnswers()

    dispatch(setAnswers(answers_))

  }
  useEffect(() => {
    getAllSurveys_Call().then(() => {
      //you can set a loader here
    })
  }, [])



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
        <Header user={user} toggleSidebarState={toggleSidebarState} setShowActivePanel={setShowActivePanel} />
        <MainContent onClick={closeSideBar} sideBarOpen={sidebarState}>
          {showActivePanel === "Overview" ? (
            <SettingPanel users={users} />
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
          ) : (
            <ViewSurveyPanel />
          )}
          {/* {showActivePanel === "Overview" ? (
            <SettingPanel users={users} />
          ) : showActivePanel === "My Account" ? (
            <AccountPanel />
          ) : showActivePanel === "Library" ? (
            <LibraryPanel />
          ) : showActivePanel === "Contacts" ? (
            <ContactPanel />
          ) : // ) : showActivePanel === "Update to SSO" ? (
          //   <UpdateSSOPanel />
          showActivePanel === "Logout" ? (
            <Logout onClick={signOut()} />
          ) : null} */}
        </MainContent>
      </DashboardMain>
    </DashboardWrapper>
  );
};

export default Dashboard;
