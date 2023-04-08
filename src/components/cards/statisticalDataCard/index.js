import Card from "@/components/base/card";

import { surveyData } from "../../../data";
import { Content, ProgressbarContainer } from "./StatisticalDataElement";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarChild } from "../surveyCompletedCard/SurveryCompletedCardElement";

const StatisticalDataCard = ({ width }) => {
  const styles = {
    trailColor: "#343a3f",
    strokeLinecap: "butt",
    textSize: "22px",
    textColor: "grey",
  };
  return (
    <Card width={width} title="Statistical data">
      <Content>
        <ProgressbarContainer>
          <CircularProgressbarWithChildren
            value={surveyData.heighlights.lorem1.value}
            maxValue={1000}
            children={
              <CircularProgressbarChild text="lorem" value={841}/>
            }
            counterClockwise={true}
            styles={buildStyles({
              ...styles,
              rotation: 0.25,
              pathColor: "#4d88ff",
            })}
          />
        </ProgressbarContainer>
        <ProgressbarContainer>
          <CircularProgressbarWithChildren
            value={surveyData.heighlights.lorem2.value}
            maxValue={800}
            children={
              <CircularProgressbarChild text="lorem" value={642}/>
            }
            counterClockwise={true}
            styles={buildStyles({
              ...styles,
              rotation: 0.15,
              pathColor: "#ff0066",
            })}
          />
        </ProgressbarContainer>
        <ProgressbarContainer>
          <CircularProgressbarWithChildren
            value={surveyData.heighlights.lorem3.value}
            maxValue={800}
            children={
              <CircularProgressbarChild text="lorem" value={364}/>
            }
            counterClockwise={true}
            styles={buildStyles({
              ...styles,
              rotation: 0.9,
              pathColor: "#00ff00",
            })}
          />
        </ProgressbarContainer>
        <ProgressbarContainer>
          <CircularProgressbarWithChildren
            value={surveyData.heighlights.lorem4.value}
            maxValue={800}
            children={
              <CircularProgressbarChild text="lorem" value={242}/>
            }
            counterClockwise={true}
            styles={buildStyles({
              ...styles,
              rotation: 0.8,
              pathColor: "#cc00ff",
            })}
          />
        </ProgressbarContainer>
      </Content>
    </Card>
  );
};

export default StatisticalDataCard;
