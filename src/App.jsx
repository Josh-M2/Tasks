import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import DataDisplay from "./components/DataDisplay";
import LandingPage from "./pages/LandingPage";
import UserListWithSearch from "./components/usersListWithSearch/UsersListWithSearch";
import CountdownTimer from "./components/countDownTimer/countDownTimer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/task1" element={<DataDisplay />} />
          <Route path="/task2" element={<UserListWithSearch />} />
          <Route path="/task3" element={<CountdownTimer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
