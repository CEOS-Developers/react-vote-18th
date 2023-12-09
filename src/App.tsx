import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/layout/Header";
import VoteCategory from "./pages/vote/VoteCategory";
import VotePartLeader from "./pages/vote/VotePartSelect";
import VoteDemodaySelect from "./pages/vote/VoteDemodaySelect";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

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
      </Routes>
    </Router>
  );
}

export default App;
