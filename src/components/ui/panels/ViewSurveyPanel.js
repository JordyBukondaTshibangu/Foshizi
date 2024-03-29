import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "@/components/base/card";
import Table from "@/components/base/table";
import ProgressBar from "@/components/base/progressBar";
import { selectSurveys } from "@/components/base/store/surveySlice";
import { selectAnswers } from "@/components/base/store/answerSlice";
import { PanelContainer } from "@/components/layout/dashboard/DashboardElement";

const colors = [
  "#1C75BC",
  "#8DC63F",
  "#009444",
  "#662D91",
  "#662D91",
  "#1C75BC",
  "#8DC63F",
  "#009444",
  "#662D91",
  "#662D91",
  "#1C75BC",
  "#8DC63F",
  "#009444",
  "#662D91",
  "#662D91",
  "#1C75BC",
  "#8DC63F",
  "#009444",
  "#662D91",
  "#662D91",
  "#1C75BC",
  "#8DC63F",
  "#009444",
  "#662D91",
  "#662D91",
  "#1C75BC",
  "#8DC63F",
  "#009444",
  "#662D91",
  "#662D91",
];

const ViewSurveyPanel = () => {
  const surveysData = useSelector(selectSurveys);
  const answersData = useSelector(selectAnswers);

  const [selectedAnswers, setSelectedAnswers] = useState(null); //3
  const [selectedSurvey, setSelectedSurvey] = useState(surveysData[0]); //1
  const [selectedQuestion, setSelectedQuestion] = useState(
    surveysData[0].questions[0]
  ); //2

  const changeSelectedSurvey = (e) => {
    const survey = surveysData.find((survey) => survey._id == e);
    setSelectedSurvey(survey);

    changeSelectedQuestion(survey.questions[0].id);
  };

  const changeSelectedQuestion = async (e) => {
    const question = await selectedSurvey.questions.find(
      (question) => question.id == e
    );
    setSelectedQuestion(question);

    const singleSurveyAnswers = await answersData.filter(
      (answer) => answer.survey_id == selectedSurvey._id
    );

    if (singleSurveyAnswers) {
      const values = [];
      await singleSurveyAnswers.forEach((response) => {
        const data = response.data;
        if (data.hasOwnProperty(`${question.id}`)) {
          const index = values.findIndex(
            (element) => element[0] === data[`${question.id}`]
          );
          if (index >= 0) {
            values[index][1]++;
          } else {
            values.push([data[`${question.id}`], 1]);
          }
        }
      });

      setSelectedAnswers(values);
      return;
    }

    setSelectedAnswers(null);
  };

  useEffect(() => {
    return () => {
      changeSelectedQuestion(surveysData[0].questions[0].id);
    };
  }, []);

  return (
    // <PanelContainer>
    <Card width="full">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "10px 0",
          width: "50%",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            marginRight: "20px",
            color: "white",
            fontWeight: "400",
          }}
        >
          Survey Results:
        </h2>
        <select
          value={selectedSurvey._id}
          onChange={(e) => changeSelectedSurvey(e.target.value)}
          placeholder="Loading..."
          style={{
            border: "1px solid rgba(255, 255, 255, 0.2)",
            padding: "10px",
            borderRadius: "4px",
            outline: "none",
            backgroundColor: "#343A3F",
            color: "white",
          }}
        >
          {surveysData?.map((item) => (
            <option key={item._id} value={item._id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: "50px" }}>
        <select
          value={selectedQuestion?.id}
          onChange={(e) => changeSelectedQuestion(e.target.value)}
          placeholder="Question loading..."
          style={{
            border: "1px solid rgba(255, 255, 255, 0.2)",
            padding: "10px",
            borderRadius: "4px",
            outline: "none",
            background: "rgba(249, 143, 25, 0.21)",
            color: "white",
          }}
        >
          {selectedSurvey?.questions?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.text}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          alignItems: "center",
          margin: "10px 0",
          width: "50%",
        }}
      >
        {selectedAnswers ? (
          selectedAnswers.map((data, index) => {
            let total = 0;
            for (let i = 0; i < selectedAnswers.length; i++) {
              total = total + selectedAnswers[i][1];
            }

            const percentage = (data[1] / total) * 100;
            return (
              <ProgressBar
                key={index}
                bgcolor={colors[index]}
                progress={percentage.toFixed(0)}
                id={data[1]}
                text={data[0]}
              />
            );
          })
        ) : (
          <p>No data...</p>
        )}
      </div>

      <div
        style={{
          marginTop: "100px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "70px",
        }}
      >
        <h1
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Overview
        </h1>

        <div>
          <Table data={answersData} />
        </div>
      </div>
    </Card>
    // </PanelContainer>
  );
};

export default ViewSurveyPanel;
