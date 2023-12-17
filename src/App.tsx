import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/layout/Header";
import VoteCategory from "./pages/VoteCategory";
import VotePartLeader from "./pages/VotePartSelect";
import VoteDemodaySelect from "./pages/VoteDemodaySelect";
import VoteLeader from "./pages/VoteLeader";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<VoteCategory />} />
        <Route path="/select-part" element={<VotePartLeader />} />
        <Route path="/select-demoday" element={<VoteDemodaySelect />} />
        <Route path="/select-leader" element={<VoteLeader />} />
      </Routes>
    </Router>
  );
}

export default App;
