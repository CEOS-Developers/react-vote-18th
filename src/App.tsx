import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import Main from './pages/main';
import Signup from './pages/signup';
import Login from './pages/login';
import TeamVote from './pages/teamvote';
import MemberVote from './pages/membervote';
import TeamResult from './pages/TeamResult';
import MemberResult from './pages/MemberResult';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Main />} />
            <Route path="/teamvote" element={<TeamVote />} />
            <Route path="/membervote" element={<MemberVote />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
