import Card from "@/components/base/card";
import "react-circular-progressbar/dist/styles.css";

import {
  Heading,
  SurveyList,
  Status,
  SurveyContent,
  StatusElement,
  SurveyNumber,
  SurveyDescription,
  SurveyStatus,
  Pointer,
} from "../customerSurveyCompletedCard/CustomerSurveyCompletedElement";

import {
  Content,
  ContentContainer,
  DataHolder,
  SurveyCompleteGrid,
  SurveyCompleteGridItemData,
} from "./SurveryCompletedCardElement";

import { surveyData } from "../../../data";
import { useEffect, useState } from "react";
import axios from "axios";

async function dataFetch() {
  // Fetching data from an API
  return await axios
    .get("https://foshizi.herokuapp.com/api/getallsurveys")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw new Error("something went wrong");
    });
}

const SurveyCompletedCard = () => {
  const [first, setfirst] = useState();

  const customerSurveyCompleted = [
    {
      index: "Survey one",
      description: "Lorem ipsum dolor  ",
      status: "green",
    },
    {
      index: "Survey two",
      description: "Lorem ipsum dolor  ",
      status: "red",
    },
    {
      index: "Survey three",
      description: "Lorem ipsum dolor  ",
      status: "orange",
    },
    {
      index: "Survey four",
      description: "Lorem ipsum dolor  ",
      status: "green",
    },
    {
      index: "Survey five",
      description: "Lorem ipsum dolor  ",
      status: "green",
    },
    {
      index: "Survey six",
      description: "Lorem ipsum dolor  ",
      status: "red",
    },
  ];

  useEffect(() => {
    return async () => {
      const data = await dataFetch();
      const result = data?.result;
      setfirst(result);
      // Perform culculations for the <SurveyCompleteGrid>
    };
  }, []);

  return (
    <Card width="full" title="Survey Complete">
      <ContentContainer>
        <Content>{first && <DataHolder data={first} />}</Content>
      </ContentContainer>
      <ContentContainer>
        <div>
          <Heading>
            <SurveyList>Completed</SurveyList>
            <Status>
              <StatusElement>Completed</StatusElement>
              <Pointer />
            </Status>
          </Heading>
          {customerSurveyCompleted.map(({ index, description, status }) => (
            <SurveyContent key={index}>
              <SurveyNumber>{index}</SurveyNumber>
              <SurveyDescription>{description}</SurveyDescription>
              <SurveyStatus status={status} />
            </SurveyContent>
          ))}
        </div>
        <SurveyCompleteGrid>
          {surveyData.statuses.map((data, index) => (
            <SurveyCompleteGridItemData
              text={data.type}
              direction={data.direction}
              numberValue={data.number}
              key={index}
              percentageValue={data.percentage}
            />
          ))}
        </SurveyCompleteGrid>
      </ContentContainer>
    </Card>
  );
};

export default SurveyCompletedCard;
