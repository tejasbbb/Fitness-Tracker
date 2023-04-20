import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const WeightLineGraph = () => {
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/exercises/")
      .then((response) => {
        const weightData = response.data.map((exercise) => ({
          weight: exercise.weight,
          date: exercise.date.substring(0, 10),
        }));
        setWeights(weightData);
      })
      .catch((err) => console.log(err));
  }, []);

  const data = {
    labels: weights.map((item) => item.date),
    datasets: [
      {
        label: "Weight",
        data: weights.map((item) => item.weight),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div>
      <h2>Weight Line Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeightLineGraph;
