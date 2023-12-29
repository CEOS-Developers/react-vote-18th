import { Header } from 'components/Common/Header';
import { DemoVotePage } from 'page/DemoVotePage';
import LoginPage from 'page/LoginPage';
import MainPage from 'page/MainPage';
import { PartVotePage } from 'page/PartVotePage';
import SignupPage from 'page/SignupPage';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function Router() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/partVote" element={<PartVotePage />}></Route>
          <Route path="/demoVote" element={<DemoVotePage />}></Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default Router;
