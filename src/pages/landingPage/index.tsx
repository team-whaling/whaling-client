import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CSSProperties } from 'styled-components';
import Icon, { IconType } from '../../components/Icon';
import { Column, itemMargin } from '../../components/Layout';
import Text, { TextType } from '../../components/Text';
import useAuth from '../../hooks/useAuth';

const LandingPage = () => {
  const { getAccessToken, httpResponseStatus } = useAuth();
  const [searchParams] = useSearchParams();
  const [code, setCode] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    const param = searchParams.get('code');
    setCode(param ? param : '');
  }, []);

  useEffect(() => {
    if (code) {
      window.localStorage.setItem('code', JSON.stringify(code));
      getAccessToken();
    }
  }, [code]);

  useEffect(() => {
    if (httpResponseStatus === 201) {
      // initial user
      navigate(`/sign-up`);
    } else if (httpResponseStatus === 200) {
      navigate(`/`);
    }
  }, [httpResponseStatus]);

  return (
    <Column style={wrapper}>
      <Column style={landingWrapper}>
        <Icon iconType={IconType.LandingWhale} style={itemMargin} />

        <Icon iconType={IconType.WhalingTitle} style={itemMargin} />
        <Text
          type={TextType.Headline3}
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

export default LandingPage;
