import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ChooseTeam from "./components/chooseTeam";
import UserDashboard from "./components/userDashboard";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/teamselect" element={<ChooseTeam/>}/>
        <Route path="/dashboard" element={<UserDashboard />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
