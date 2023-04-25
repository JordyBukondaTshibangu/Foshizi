import ProfileCard from "@/components/cards/profileCard";
import {
  RowContainer,
  PanelContainer,
} from "@/components/layout/dashboard/DashboardElement";
import CasualAnalysisCard from "@/components/cards/casualAnalysisCard";
import StatisticalDataCard from "@/components/cards/statisticalDataCard";
import CustomerSurveyCompletedCard from "@/components/cards/customerSurveyCompletedCard";
import ExploratoryDataCard from "@/components/cards/exploratoryDataCard";
import { useSelector } from "react-redux";
import { selectSurveys } from "@/components/base/store/surveySlice";
import { selectAnswers } from "@/components/base/store/answerSlice";

import { useEffect, useState } from "react";
import SurveysStatusCard from "@/components/cards/SurveysStatusCard/SurveysStatusCard";

const LibraryPanel = () => {
  const surveysData = useSelector(selectSurveys);
  const answersData = useSelector(selectAnswers);
  const [surveyCountbyname, setSurveyCountbyname] = useState([]);
  const [openSurveys, setOpenSurveys] = useState(0);
  const [closedSurveys, setClosedSurveys] = useState(0);

  const totalAnswers = answersData.length;
  const getSurveyCountbyname = (surveysData) => {
    let surveyCountbyname = [];
    surveysData.forEach((survey) => {
      let name = survey.title;
      let nameIndex = surveyCountbyname.findIndex((item) => item.name == name);
      if (nameIndex == -1) {
        surveyCountbyname.push({ name: name, value: 1 });
      } else {
        surveyCountbyname[nameIndex].value += 1;
      }
    });
    setSurveyCountbyname(surveyCountbyname);
  };
  const getSurveysStatus = (surveysData) => {
    let openSurveys = 0;
    let closedSurveys = 0;
    surveysData.forEach((survey) => {
      if (survey.isClosed == false) {
        openSurveys += 1;
      } else {
        closedSurveys += 1;
      }
    });
    setOpenSurveys(openSurveys);
    setClosedSurveys(closedSurveys);
  };

  useEffect(() => {
    getSurveyCountbyname(surveysData);
    getSurveysStatus(surveysData);
  }, [surveysData]);

  return (
    <PanelContainer>
      <RowContainer>
        <CasualAnalysisCard width="half" labelsData={surveyCountbyname} />
        <SurveysStatusCard
          openSurveys={openSurveys}
          closedSurveys={closedSurveys}
        />
      </RowContainer>
      <RowContainer>
        <StatisticalDataCard width="half" answers={totalAnswers} />
        <CustomerSurveyCompletedCard width="third" />
      </RowContainer>
      <RowContainer>
        <ProfileCard width="full" tab="library" />
      </RowContainer>
      {/* <RowContainer>
        <ExploratoryDataCard width="third" />
      </RowContainer> */}
    </PanelContainer>
  );
};

export default LibraryPanel;
