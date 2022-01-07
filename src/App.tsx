import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/global.styles';
import CreateVote from './pages/createVote';
import Login from './pages/login';
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateVote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
