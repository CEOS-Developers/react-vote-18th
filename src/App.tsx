import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/layout/Header";
import VoteMain from "./pages/VoteMain";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<VoteMain />} />
      </Routes>
    </Router>
  );
}

export default App;
