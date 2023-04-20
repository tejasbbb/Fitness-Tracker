import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WeightLineGraph from "./chartComponent";

const Exercise = (props) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>{props.exercise.weight}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => props.deleteExercise(props.exercise._id)}
        >
          Delete Exercise
        </button>
        <button
          className="btn btn-danger"
          onClick={() => navigate("/edit/" + props.exercise._id)}
        >
          Edit Exercise
        </button>
      </td>
    </tr>
  );
};

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/exercises/")
      .then((response) => setExercises(response.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteExercise = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3000/exercises/" + id)
      .then((data) => {
        console.log(data, "here");
        setExercises((prevExercises) =>
          prevExercises.filter((el) => el._id !== id)
        );
      })
      .catch((err) => console.log(err));
  };

  const createExercise = () => {
    return exercises.map((exercise) => (
      <Exercise
        exercise={exercise}
        deleteExercise={deleteExercise}
        key={exercise._id}
      />
    ));
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Weight</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{createExercise()}</tbody>
      </table>
      {/* <div>
        <WeightLineGraph />
      </div> */}
    </div>
  );
};

export default ExercisesList;
