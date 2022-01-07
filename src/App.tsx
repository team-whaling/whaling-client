import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStyle from './styles/global.styles';
import CreateVote from './pages/createVote';
import Login from './pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
