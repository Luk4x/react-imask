import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Roboto', sans-serif;
    }

    html, body {
        background-color: #111;
    }
`;
