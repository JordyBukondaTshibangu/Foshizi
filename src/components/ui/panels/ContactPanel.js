import RecentActivitiesCard from "@/components/cards/recentActivitiesCard";
import {
  RowContainer,
  PanelContainer,
} from "@/components/layout/dashboard/DashboardElement";

const ContactPanel = ({ user }) => {
  return (
    <PanelContainer>
      <RowContainer>
        <RecentActivitiesCard width="full" user={user} />
      </RowContainer>
    </PanelContainer>
  );
};

export default ContactPanel;
