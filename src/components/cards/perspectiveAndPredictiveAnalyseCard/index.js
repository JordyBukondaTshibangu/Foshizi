import Card from "@/components/base/card";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const PerspectivePredictiveAnalysisCard = ({
  width,
  chartData = {
    min: 0,
    max: 400,
    values: [200, 250, 110, 350, 200, 300, 100, 300, 350, 200, 200, 300],
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
}) => {
  const MAX_VALUE = chartData.max;
  const MIN_VALUE = chartData.min;
  const BAR_COLOR = "#0099ff";
  const GRID_COLOR = GRID_COLOR;

  const options = {
    updateMode: "active",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: MIN_VALUE,
        max: MAX_VALUE,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        min: MIN_VALUE,
        max: MAX_VALUE,
        border: {
          display: false,
        },
        grid: {
          display: false,
          border: {
            display: false,
          },
        },
      },
    },
  };

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.values, //Jan-Dec
        backgroundColor: BAR_COLOR,
      },
    ],
  };
  return (
    <Card width={width} title="Perspective and Predictive Analysis">
      <Bar options={options} data={data} />
    </Card>
  );
};

export default PerspectivePredictiveAnalysisCard;
