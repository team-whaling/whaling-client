import React, { JSXElementConstructor, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image, { ImgType } from '../components/Image';
import { RowCenter } from '../components/Layout';
import useAuth from '../hooks/useAuth';
import useVote from '../hooks/useVote';

const withAuth = (
  WrappedComponent: React.FC<{}>,
  isAuthorizingNeed: boolean,
): ReactElement<any, string | JSXElementConstructor<any>> => {
  const Auth = () => {
    const {
      checkUserVerification,
      authorized,
      checkingToken,
      getParticipatedVotes,
    } = useAuth();

    const navigate = useNavigate();
    useEffect(() => {
      // if (!isAuthorizingNeed && !authorized) {
      //   // enter login page without token || after window refresh
      //   checkUserVerification();
      // }
      // if (!isAuthorizingNeed && authorized) {
      //   // enter login page with token
      //   navigate('/');
      // }
      // if (isAuthorizingNeed && !authorized) {
      //   // if (isAuthorizingNeed) {
      //   // other pages
      //   checkUserVerification();
      // }

      checkUserVerification();
    }, []);

    useEffect(() => {
      if (!isAuthorizingNeed && authorized) navigate('/');
      if (isAuthorizingNeed && !authorized) navigate('/login');
      // if (isAuthorizingNeed && authorized) navigate('/');
    }, [authorized]);

    return <WrappedComponent />;
  };

  return <Auth />;
};

export default withAuth;
