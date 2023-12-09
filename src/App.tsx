import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/layout/Header";
import VoteCategory from "./pages/VoteCategory";
import VotePartLeader from "./pages/VotePartSelect";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<VoteCategory />} />
        <Route path="/select-part" element={<VotePartLeader />} />
      </Routes>
    </Router>
  );
}

export default App;
