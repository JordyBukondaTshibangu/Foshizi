import Card from "@/components/base/card";

import { surveyData } from "../../../data";
import { Content, ProgressbarContainer } from "./StatisticalDataElement";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { CircularProgressbarChild } from "../surveyCompletedCard/SurveryCompletedCardElement";

const StatisticalDataCard = ({ width,answers }) => {
  const styles = {
    trailColor: "#343a3f",
    strokeLinecap: "butt",
    textSize: "22px",
    textColor: "grey",
  };

  
  const data = [
    { name: "Total Answers", value: answers },

  ];
  return (
    <Card width={width} title="Answers">
      <Content>
        {data.map((item, index) => {
          return (
            <ProgressbarContainer>
              <CircularProgressbarWithChildren
                value={item.value}
                maxValue={100}
                children={
                  <CircularProgressbarChild
                    text={item.name}
                    value={item.value}
                  />
                }
                counterClockwise={true}
                styles={buildStyles({
                  ...styles,
                  rotation: 0.25,
                  pathColor: "#4d88ff",
                })}
              />
            </ProgressbarContainer>
          );
        })}
      </Content>
    </Card>
  );
};

export default StatisticalDataCard;
