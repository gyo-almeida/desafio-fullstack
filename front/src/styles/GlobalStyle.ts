import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --color-primery: #D8BFD8;
        --color-primery-50: #B0E0E6;
        --color-secondary: #FFDAB9;

        --grey-100: #A9A9A9;
        --grey-50: #C0C0C0;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        --white: #FFFFFF;
    }

    body{
        font-family: 'Inter', sans-serif;
        background-image: linear-gradient(to bottom right, #D8BFD8, #B0E0E6, #FFDAB9);
        width: 100vw;
        height: 100vh;
    }

    button{
        cursor: pointer;
    }

    ul{
        list-style: none;
    }
`;
