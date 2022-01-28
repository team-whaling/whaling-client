import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/global.styles';
import CreateVote from './pages/createVote';
import Login from './pages/login';
import LandingPage from './pages/landingPage';
import SignUp from './pages/signUp';
import MyPage from './pages/myPage';
import Detail from './pages/votes/detail';
import Main from './pages/main';
import Votes from './pages/votes';
import MyVoteList from './pages/myPage/voteList';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { MyVoteListType } from './pages/myPage/types';
function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/auth/kakao/callback" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/create" element={<CreateVote />} />
            <Route path="/my-page/:nickname" element={<MyPage />} />
            <Route
              path="/my-page/:nickname/created-votes"
              element={<MyVoteList type={MyVoteListType.Created} />}
            />
            <Route
              path="/my-page/:nickname/participated-votes"
              element={<MyVoteList type={MyVoteListType.Participated} />}
            />
            <Route path="/votes" element={<Votes />} />
            <Route path="/votes/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
