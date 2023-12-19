import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import Main from './pages/main';
import Signup from './pages/signup';
import Login from './pages/login';
import TeamVote from './pages/teamvote';
import MemberVote from './pages/membervote';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/teamvote" element={<TeamVote />} />
          <Route path="/membervote" element={<MemberVote />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
