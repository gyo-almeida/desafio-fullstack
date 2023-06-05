import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --color-primery: #7c537c;
        --color-primery-50: #B0E0E6;
        --color-secondary: #FFDAB9;

        --grey-100: #444242;
        --grey-50: #A9A9A9;
        --grey-30: #C0C0C0;
        --grey-10: #E0E0E0;
        --grey-0: #F5F5F5;

        --white: #FFFFFF;
    }

    body{
        display: flex;
        font-family: 'Inter', sans-serif;
        background-image: linear-gradient(to bottom right, #D8BFD8, #B0E0E6, #FFDAB9);
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }


    button{
        cursor: pointer;
    }

    ul{
        list-style: none;
    }

    
`;
