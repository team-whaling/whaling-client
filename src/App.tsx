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
import withAuth from './hoc/withAuth';
function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Main />} /> */}
            <Route path="/" element={withAuth(Main, true)} />
            <Route path="/auth/kakao/callback" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={withAuth(SignUp, true)} />
            <Route path="/create" element={withAuth(CreateVote, true)} />
            <Route path="/my-page/:nickname" element={withAuth(MyPage, true)} />
            <Route
              path="/my-page/:nickname/created-votes"
              element={withAuth(
                () => (
                  <MyVoteList type={MyVoteListType.Created} />
                ),
                true,
              )}
            />
            <Route
              path="/my-page/:nickname/participated-votes"
              // element={<MyVoteList type={MyVoteListType.Participated} />}
              element={withAuth(
                () => (
                  <MyVoteList type={MyVoteListType.Participated} />
                ),
                true,
              )}
            />
            <Route path="/votes" element={withAuth(Votes, true)} />
            <Route path="/votes/:id" element={withAuth(Detail, true)} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
