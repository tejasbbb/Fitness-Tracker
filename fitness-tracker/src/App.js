import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.components";
import CreateExercise from "./components/create-exercise.component";
import "./App.css";
import WeightLineGraph from "./components/chartComponent";
import HomePage from "./components/homepageComponent";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <br />
        <Routes>
          <Route path="/exercise" element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/Data" element={<WeightLineGraph />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
