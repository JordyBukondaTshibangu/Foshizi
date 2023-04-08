import { PanelContainer } from "@/components/layout/dashboard/DashboardElement";
import Card from "@/components/base/card";
import ProgressBar from "@/components/base/progressBar";
import Table from "@/components/base/table";
import React, { useEffect } from "react";
import { current } from "@reduxjs/toolkit";

const surveys = [
  {
    id: 1,
    title: "SAB",
    questions: [
      {
        id: 1,
        text: "How satisfied are you with our product?",
        answers: [
          {
            id: 5,
            percentage: 40,
            text: "Very Satisfied",
          },
          {
            id: 2,
            percentage: 5,
            text: "Satisfied",
          },
          {
            id: 6,
            percentage: 10,
            text: "Neutral",
          },
          {
            id: 8,
            percentage: 35,
            text: "Dissatisfied",
          },
          {
            id: 1,
            percentage: 75,
            text: "Very dissatisfied",
          },
        ],
      },
    ],
  },
];

const colors = ["#1C75BC", "#8DC63F", "#009444", "#662D91", "#662D91"];

const ViewSurveyPanel = () => {
  const [surveysData, setSurveysData] = React.useState(null);
  const [currentSurvey, setcurrentSurvey] = React.useState(null);
  const [currentSurveyData, setcurrentSurveyData] = React.useState(null);
  const [users, setUsers] = React.useState(null);

  useEffect(() => {
    const getAllSurveys = async () => {
      try {
        const rawData = await fetch(
          "https://foshizi.herokuapp.com/api/getallsurveys"
        );
        const data = await rawData.json();
        setSurveysData(data.result);
        setcurrentSurvey(data.result[1]._id);
      } catch (e) {
        alert(e);
      }
    };
    const getAllUsers = async () => {
      try {
        const rawData = await fetch(
          "https://foshizi.herokuapp.com/api/getallusers"
        );
        const data = await rawData.json();
        setUsers(data.data);
      } catch (e) {
        alert(e);
      }
    };

    return () => {
      getAllSurveys();
      getAllUsers();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (surveysData) {
        const filtered = surveysData?.filter(
          (item) => item._id == currentSurvey
        );
        setcurrentSurveyData(filtered[0]);
      }
    };
  }, [currentSurvey, surveysData]);

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
          value={currentSurvey}
          onChange={(e) => setcurrentSurvey(e.target.value)}
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

      <div style={{ marginTop: "20px" }}>
        <select
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
          {currentSurveyData?.questions?.map((item) => (
            <option key={item._id} value={item._id}>
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
        {surveys[0].questions[0].answers.map((data, index) => (
          <ProgressBar
            key={data.id}
            bgcolor={colors[index]}
            progress={data.percentage}
            id={data.id}
            text={data.text}
          />
        ))}
      </div>

      <div style={{ marginTop: "40px", width: "100%" }}>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Overview
        </h1>

        <div style={{ marginTop: "20px" }}>
          <Table data={users} />
        </div>
      </div>
    </Card>
    // </PanelContainer>
  );
};

export default ViewSurveyPanel;
