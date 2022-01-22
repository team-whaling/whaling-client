import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CSSProperties } from 'styled-components';
import Icon, { IconType, TIcon } from '../../components/Icon';
import { Column, itemMargin } from '../../components/Layout';
import Text, { TextType, TText } from '../../components/Text';
import useAuth from '../../hooks/useAuth';

const index = () => {
  const { getAccessToken, checkUserVerification, authorized } = useAuth();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.setItem('code', JSON.stringify(code));
  }, [code]);

  useEffect(() => {
    getAccessToken();
  }, [window.localStorage.getItem('code')]);

  useEffect(() => {
    checkUserVerification();
  }, [window.localStorage.getItem('token')]);

  useEffect(() => {
    console.log('authorized:', authorized);
    if (authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);

  return (
    <Column style={wrapper}>
      <Column style={landingWrapper}>
        <Icon iconType={IconType.LandingWhale as TIcon} style={itemMargin} />

        <Icon iconType={IconType.WhalingTitle as TIcon} style={itemMargin} />
        <Text
          type={TextType.Headline3 as TText}
          content="함께 고래가 되는 여정, 웨일링"
          style={itemMargin}
        />
      </Column>
    </Column>
  );
};

const wrapper: CSSProperties = {
  width: '100%',
  height: '100%',

  justifyContent: 'center',
  alignItems: 'center',
};

const landingWrapper: CSSProperties = {
  justifyContent: 'center',
  alignItems: 'center',
};

export default index;
