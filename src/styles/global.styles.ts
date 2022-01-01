import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Noto Sans KR', sans-serif;
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
    height: 812px;

    border: 1px solid black
}
`;

export default GlobalStyle;
