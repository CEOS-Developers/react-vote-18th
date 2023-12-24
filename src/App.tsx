import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./common/layout/Header/Header";
import VoteCategory from "./pages/vote/VoteCategory";
import VotePartLeader from "./pages/vote/VotePartSelect";
import VoteDemodaySelect from "./pages/vote/VoteDemodaySelect";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import VoteLeader from "./pages/vote/VoteLeader";
import VoteResults from "./pages/vote/VoteResults";
import VoteDemoday from "./pages/vote/VoteDemoday";
import { ProtectedRoute } from "./features/auth/components/ProtectedRoute/ProtectedRoute";
import { Suspense } from "react";

function App() {
  const user = false;
  return (
    <Suspense fallback={null}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<VoteCategory />} />
          <Route
            element={<ProtectedRoute isAllowed={!user} redirectPath={"/"} />}
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route
            element={
              <ProtectedRoute isAllowed={!!user} redirectPath={"/login"} />
            }
          >
            <Route path="/select-part" element={<VotePartLeader />} />
            <Route path="/select-demoday" element={<VoteDemodaySelect />} />
            <Route path="/select-leader" element={<VoteLeader />} />
            <Route path="/vote-leader" element={<VoteLeader />} />
            <Route path="/vote-demoday" element={<VoteDemoday />} />
            <Route path="/vote-results" element={<VoteResults />} />
          </Route>
          <Route path={"/*"} element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
