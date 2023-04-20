import React, { useState } from "react";
import "./createExbutton.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateExercise = () => {
  const navigate = useNavigate();
  const [exercise, setExercise] = useState({
    // username: "",
    description: "",
    duration: 0,
    date: new Date(),
    // users: []
    weight: 0,
  });

  // const onChangeUsername = (event) => {
  //   setExercise({ ...exercise, username: event.target.value });
  // };

  const onChangeDescription = (event) => {
    setExercise({ ...exercise, description: event.target.value });
  };

  const onChangeDuration = (event) => {
    setExercise({ ...exercise, duration: event.target.value });
  };

  const onChangeDate = (date) => {
    setExercise({ ...exercise, date: date });
  };

  const onChangeWeight = (event) => {
    setExercise({ ...exercise, weight: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(exercise);
    // submit state to database
    axios
      .post("http://localhost:3000/exercises/add", exercise)
      .then((data) => console.log(data));

    navigate("/exercise");
  };
  return (
    <div>
      <h3>Create a New Exercise</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Exercise</label>
          <input
            type="text"
            required
            className="form-control"
            value={exercise.description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-control">
          <label>Duration(in minutes):</label>
          <input
            type="text"
            required
            className="form-control"
            value={exercise.duration}
            onChange={onChangeDuration}
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </div>
        <div className="form-control">
          <label>Date</label>
          <DatePicker
            label="Exercise Date"
            selected={exercise.date}
            onChange={onChangeDate}
          ></DatePicker>
        </div>
        <div className="form-control">
          <label>Weight(in .lbs)</label>
          <input
            type="text"
            required
            className="form-control"
            value={exercise.weight}
            onChange={onChangeWeight}
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Create exercise entry"
            className="btn btn-primary custom-btn"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
