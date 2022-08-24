import React from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

const PieChart = ({ categories, series }) => {
  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    title: {
      text: "Skills x Sprint",
    },
    labels: categories,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart options={options} series={series} type="pie" width="100%" />
  );
};

export default PieChart;
