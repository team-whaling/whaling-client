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
      checkUserVerification();
    }, []);

    useEffect(() => {
      if (isAuthorizingNeed && !authorized) {
        navigate('/login');
      }
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
