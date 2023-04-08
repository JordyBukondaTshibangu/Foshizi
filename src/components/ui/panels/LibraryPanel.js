import ProfileCard from "@/components/cards/profileCard";
import {
  RowContainer,
  PanelContainer,
} from "@/components/layout/dashboard/DashboardElement";
import CasualAnalysisCard from "@/components/cards/casualAnalysisCard";
import PerspectivePredictiveAnalysisCard from "@/components/cards/perspectiveAndPredictiveAnalyseCard";
import StatisticalDataCard from "@/components/cards/statisticalDataCard";
import CustomerSurveyCompletedCard from "@/components/cards/customerSurveyCompletedCard";
import ExploratoryDataCard from "@/components/cards/exploratoryDataCard";

import {
  PerspectivePredictiveAnalysisCardData as PPAD,
  CasualAnalysisData,
} from "../../../data";

const LibraryPanel = () => {
  return (
    <div style={{ width: "99%", paddingRight: "2%", boxSizing: "border-box" }}>
      <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
        <div style={{ paddingLeft: "1%", paddingRight: "1%" }}>
          <RowContainer>
            <CasualAnalysisCard width="half" labelsData={CasualAnalysisData} />
            <PerspectivePredictiveAnalysisCard
              width="third"
            />
          </RowContainer> <RowContainer>
            <StatisticalDataCard width="half" />
            <CustomerSurveyCompletedCard width="third" />
          </RowContainer>
        </div> <RowContainer>
          <ProfileCard width="full" tab="library" /> </RowContainer>

      </div>

      {/* <RowContainer>
        <ExploratoryDataCard width="third" />
      </RowContainer>  */}
    </div>
  );
};

export default LibraryPanel;
