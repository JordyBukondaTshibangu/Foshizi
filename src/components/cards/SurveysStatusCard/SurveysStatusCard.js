import { Bar } from "react-chartjs-2";
import Card from "@/components/base/card";

function SurveysStatusCard({ openSurveys, closedSurveys }) {
  const data = {
    labels: ["Open", "Closed"],
    datasets: [
      {
        label: "Survey Status",
        data: [openSurveys, closedSurveys],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <Card width="third" title="Surveys statuses">
      <Bar data={data} />
    </Card>
  );
}

export default SurveysStatusCard;
