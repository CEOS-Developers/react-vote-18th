import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/layout/Header";
import VoteCategory from "./pages/VoteCategory";
import VotePartLeader from "./pages/VotePartSelect";
import VoteDemodaySelect from "./pages/VoteDemodaySelect";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<VoteCategory />} />
        <Route path="/select-part" element={<VotePartLeader />} />
        <Route path="/select-demoday" element={<VoteDemodaySelect />} />
      </Routes>
    </Router>
  );
}

export default App;
