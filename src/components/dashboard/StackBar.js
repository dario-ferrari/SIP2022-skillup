import React from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

const StackBar = ({ categories, series }) => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 1,
      },
    },
    title: {
      text: "Tasks by level x Sprint",
    },
    xaxis: {
      type: "category",
      categories: categories,
    },
    legend: {
      position: "top",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" width="100%" />
  );
};

export default StackBar;
