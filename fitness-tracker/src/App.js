import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.components";
import CreateExercise from "./components/create-exercise.component";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
