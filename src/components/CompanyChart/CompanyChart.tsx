import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

import { Option, ChartDataItemDTO } from "types";
import Title from "components/Title";
import { Icon } from "./CompanyChart.styled";
import { options } from "./CompanyChart.utils";
import { theme } from "theme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend,
  zoomPlugin
);

interface CompanyChartProps {
  selectedCompany: Option;
}

const CompanyChart = ({ selectedCompany }: CompanyChartProps) => {
  const { data, isLoading, isError } = useQuery<ChartDataItemDTO>(
    `getCompanyData-${selectedCompany.value}`,
    () =>
      fetch(
        `https://data.nasdaq.com/api/v3/datasets/WIKI/${selectedCompany.value}/data.json?column_index=4&api_key=emaq5WSiRtyDVbivWTsu`
      ).then((res) => res.json())
  );

  const getStatusText = () =>
    isLoading
      ? "Loading the company chart, please wait..."
      : "Error when fetching data";

  const labels = data?.dataset_data.data.map((item) => item[0]);
  const dataItems = data?.dataset_data.data.map((item) => item[1]);

  const chartData = {
    labels,
    datasets: [
      {
        label: selectedCompany.label,
        data: dataItems,
        borderColor: theme.colors.lightBlue,
        backgroundColor: theme.colors.grays[3],
      },
    ],
  };

  return (
    <>
      {isError || isLoading ? (
        <>
          <Icon
            icon={isLoading ? "spinner" : "triangle-exclamation"}
            spin={true}
          />
          <Title text={getStatusText()} />
        </>
      ) : (
        <Line data={chartData} options={options} />
      )}
    </>
  );
};

export default CompanyChart;
