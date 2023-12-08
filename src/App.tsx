import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/layout/Header";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
