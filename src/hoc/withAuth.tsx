import React, { JSXElementConstructor, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const withAuth = (
  WrappedComponent: React.FC<{}>,
  isAuthorizingNeed: boolean,
): ReactElement<any, string | JSXElementConstructor<any>> => {
  const Auth = () => {
    const { checkUserVerification, authorized } = useAuth();

    const navigate = useNavigate();
    useEffect(() => {
      checkUserVerification();
    }, []);

    useEffect(() => {
      if (isAuthorizingNeed) {
        if (authorized) {
          navigate('/');
        }
      }
    }, [authorized, navigate]);

    // return authLoading ? <div>Loading...</div> : <WrappedComponent />;
    return <WrappedComponent />;
  };

  return <Auth />;
};

export default withAuth;
