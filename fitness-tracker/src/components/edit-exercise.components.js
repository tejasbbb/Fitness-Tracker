import React, { useState, useEffect } from "react";
import "./createExbutton.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditExercise = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Get the exercise ID from the URL

  const [exercise, setExercise] = useState({
    description: "",
    duration: 0,
    date: new Date(),
    weight: 0,
  });

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

  useEffect(() => {
    axios
      .get("http://localhost:3000/exercises/" + id)
      .then((response) => {
        console.log("Fetched data:", response.data); // Log the fetched data
        setExercise({
          ...response.data,
          date: new Date(response.data.date),
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Data submitted for updating", exercise);

    axios
      .post("http://localhost:3000/exercises/update/" + id, exercise) // Use PUT request to update the exercise
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    navigate("/");
  };
  return (
    <div>
      <h3>Edit Exercise</h3>
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
            value="Edit exercise entry"
            className="btn btn-primary custom-btn"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
