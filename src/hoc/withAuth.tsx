import React, { JSXElementConstructor, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image, { ImgType } from '../components/Image';
import { RowCenter } from '../components/Layout';
import useAuth from '../hooks/useAuth';

const withAuth = (
  WrappedComponent: React.FC<{}>,
  isAuthorizingNeed: boolean,
): ReactElement<any, string | JSXElementConstructor<any>> => {
  const Auth = () => {
    const { checkUserVerification, authorized, checkingToken } = useAuth();

    const navigate = useNavigate();
    useEffect(() => {
      if (!isAuthorizingNeed && !authorized) {
        // enter login page without token || after window refresh
        checkUserVerification();
        return;
      }
      if (!isAuthorizingNeed && authorized) {
        // enter login page with token
        navigate('/');
        return;
      }
      if (isAuthorizingNeed && !authorized) {
        // other pages
        checkUserVerification();
        return;
      }
    }, []);

    useEffect(() => {
      if (!isAuthorizingNeed && authorized) navigate('/');
      if (isAuthorizingNeed && !authorized) navigate('/login');
    }, [authorized]);

    return checkingToken ? (
      <RowCenter
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Image imgType={ImgType.Loading} />
      </RowCenter>
    ) : (
      <WrappedComponent />
    );
  };

  return <Auth />;
};

export default withAuth;
