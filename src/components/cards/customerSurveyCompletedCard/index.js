import Card from "@/components/base/card";
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
} from "./CustomerSurveyCompletedElement";

const CustomerSurveyCompletedCard = ({ width }) => {
  const customerSurveyCompleted = [
    {
      index: "Survey one",
      description: "Lorem ipsum dolor sit amet, consectetur ",
      status: "green",
    },
    {
      index: "Survey two",
      description: "Lorem ipsum dolor sit amet, consectetur ",
      status: "red",
    },
    {
      index: "Survey three",
      description: "Lorem ipsum dolor sit amet, consectetur ",
      status: "orange",
    },
    {
      index: "Survey four",
      description: "Lorem ipsum dolor sit amet, consectetur ",
      status: "green",
    },
    {
      index: "Survey five",
      description: "Lorem ipsum dolor sit amet, consectetur ",
      status: "green",
    },
    {
      index: "Survey six",
      description: "Lorem ipsum dolor sit amet, consectetur ",
      status: "red",
    },
  ];
  return (
    <Card width={width} title="Customer Survey Completed" comingSoon={true}>
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
    </Card>
  );
};

export default CustomerSurveyCompletedCard;
