import LoginPage from 'page/LoginPage';
import MainPage from 'page/MainPage';
import SignupPage from 'page/SignupPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signin" element={<SignupPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
