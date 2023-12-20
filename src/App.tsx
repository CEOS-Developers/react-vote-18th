import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/layout/Header/Header";
import VoteCategory from "./pages/vote/VoteCategory";
import VotePartLeader from "./pages/vote/VotePartSelect";
import VoteDemodaySelect from "./pages/vote/VoteDemodaySelect";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import VoteLeader from "./pages/vote/VoteLeader";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<VoteCategory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select-part" element={<VotePartLeader />} />
        <Route path="/select-demoday" element={<VoteDemodaySelect />} />
        <Route path="/select-leader" element={<VoteLeader />} />
      </Routes>
    </Router>
  );
}

export default App;
