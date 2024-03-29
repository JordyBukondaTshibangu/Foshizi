import AccountDetailsCard from "@/components/cards/accountDetailsCard";
import ProfileCard from "@/components/cards/profileCard";
import LinkedAccountCard from "@/components/cards/linkedAccountsCard";
import SurveyCompletedCard from "@/components/cards/surveyCompletedCard";
import CustomerSurveyCompletedCard from "@/components/cards/customerSurveyCompletedCard";
import ColleagueCard from "@/components/cards/colleaguesCard";
import ChatCard from "@/components/cards/chatCard";
import BioCard from "@/components/cards/bioCard";
import {
  RowContainer,
  PanelContainer,
} from "@/components/layout/dashboard/DashboardElement";

const SettingPanel = ({ users, user }) => {
  return (
    <PanelContainer>
      <RowContainer>
        <AccountDetailsCard width="full" />
        <ProfileCard width="full" user={user} />
      </RowContainer>
      <RowContainer>
        <LinkedAccountCard width="full" />
        <SurveyCompletedCard width="full" />
      </RowContainer>
      <RowContainer>
        <ProfileCard width="" user={user} />
        <BioCard width="" />
        <CustomerSurveyCompletedCard width="half" />
      </RowContainer>
      <RowContainer>
        <ColleagueCard width="full" users={users} />
        <ChatCard width="half" />
      </RowContainer>
    </PanelContainer>
  );
};

export default SettingPanel;
