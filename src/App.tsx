import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/global.styles';
import CreateVote from './pages/createVote';
import Login from './pages/login';
import LandingPage from './pages/landingPage';
import SignUp from './pages/signUp';
import MyPage from './pages/myPage';
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/create" element={<CreateVote />} />
          <Route path="/my-page/:nickname" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
