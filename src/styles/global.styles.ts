import { createGlobalStyle, CSSProperties } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Noto Sans KR', sans-serif;
    color:#2B2D31;
}

html {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0;
    margin: 0;
}

body {
    width: 375px;
    height: 768px;

    padding: 0 16px;
    margin:44px 0 0;

    line-height: 150%;
}

#root {
    width: 100%;
    height: 100%;
}

`;

export const MainBackWrapper: CSSProperties = {
  alignItems: 'end',
  width: '100%',
  marginTop: '13px',
};

export default GlobalStyle;
