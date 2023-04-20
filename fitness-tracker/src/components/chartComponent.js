import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Chart from "chart.js/auto";

const LineGraph = () => {
  const [dataState, setDataState] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/exercises/").then((response) => {
      console.log(response.data);
      setDataState(response.data);
    });
  }, []);

  const chartData = {
    labels: dataState.map((exercise) => exercise.date.substring(0, 10)),
    datasets: [
      {
        label: "exercise",
        data: dataState.map((exercise) => exercise.weight),
        fill: false,
        borderColor: "#fff",
        borderWidth: 3,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: "exercise",
        font: {
          size: 24,
          family: "Arial, sans-serif",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "#fff",
        },
      },
      y: {
        title: {
          display: true,
          text: "Weight(.lbs)",
        },
        ticks: {
          color: "#fff",
          beginAtZero: true,
          stepSize: 10,
        },
        grid: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineGraph;
