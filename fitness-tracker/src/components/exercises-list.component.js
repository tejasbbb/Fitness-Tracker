import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
          style={{
            backgroundColor: "white",
            color: "gray",
            border: "1px solid gray",
            padding: "5px 10px",
            borderRadius: "0",
            margin: "2px",
          }}
          onClick={() => props.deleteExercise(props.exercise._id)}
        >
          Delete Exercise
        </button>
        <button
          style={{
            backgroundColor: "gray",
            color: "white",
            border: "1px solid gray",
            padding: "5px 10px",
            borderRadius: "0",
            margin: "2px",
          }}
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
    </div>
  );
};

export default ExercisesList;
