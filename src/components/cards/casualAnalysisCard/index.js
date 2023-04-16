import Card from "@/components/base/card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { AiFillAccountBook, AiFillAlipayCircle } from "react-icons/ai";
import { Container } from "./CasualAnalysisElement";

ChartJS.register(ArcElement, Tooltip, Legend);

const CasualAnalysisCard = ({width,
  labelsData= [
    { name: "Lorem", value: 16.66 },
],
}) => {
  
  const options = {
    locale: "en-UK",
    plugins: {
      legend: {
        display : true,
        position: "bottom",
        
        align: "center",
        labels: {
          usePointStyle: true,
          pointStyleWidth: 0,
          pointStyle: "circle",
          textAlign: "center",
          useBorderRadius: true,
          borderRadius: 510,
          color: "white",
        },
      },
    },
  };

  const data = {
    labels: labelsData.map(item=> item.name),
    datasets: [
      {
        //label: "# of Votes",
        data: labelsData.map(item=> item.value),
        backgroundColor: ["red", "purple", "blue", "green", "orange", "yellow"],
        label: labelsData.map(item=> item.name.split(" ")[0]),
        borderWidth: 0,
        offset: [10, 20],
        spacing: 5,
        cutout: "40%",
        rotation: 30,
        hoverOffset: 30,
      },
    ],
  };

  return (
    <Card width={width} title="Surveys Created">
      <Container>
        <Doughnut data={data} options={options} updateMode="resize" />
      </Container>
    </Card>
  );
};

export default CasualAnalysisCard;
