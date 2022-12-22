import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 400ms ease;
    scroll-behavior: smooth;
    }

    html, border-style, #root {
        max-height: 100vh;
        max-width: 100%;

        width: 100%;
        height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Oswald', sans-serif;
    }
    
    html {
        background: var(--black);
        color: var(--white);
    }

    :root {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;

    /* Colors Variables */
    --white: #D9D9D9;
    --black: #252525;
    --gray: #7A7A7A;


    --wake: #0abfbc;
    --food: #70ad47;
    --go: #ff9900;
    --job: #8870ff;
    --recreation: #aab69b;
    --important: #ff0000;
    

  }
  
`;
