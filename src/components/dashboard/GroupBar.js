import React from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

const GroupBar = ({ categories, series }) => {
  const options = {
    chart: {
      type: "bar",
      height: 430,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: categories,
    },
    legend: {
      position: "right",
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      width={"100%"}
      height={"530px"}
    />
  );
};

export default GroupBar;
