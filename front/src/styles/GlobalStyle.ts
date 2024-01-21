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
        background-image: radial-gradient(circle at 50% -20.71%, #ffa09b 0, #ff939d 12.5%, #ff879c 25%, #f57a97 37.5%, #d86c8f 50%, #bb5f85 62.5%, #a1557c 75%, #8a4c73 87.5%, #77456b 100%);
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-family: 'Josefin Sans', sans-serif;
        text-align: center;
        background-image: radial-gradient(circle at 50% -20.71%, #ffa09b 0, #ff939d 12.5%, #ff879c 25%, #f57a97 37.5%, #d86c8f 50%, #bb5f85 62.5%, #a1557c 75%, #8a4c73 87.5%, #77456b 100%);
        -webkit-background-clip: text;
        color: transparent;  
      }


    button{
        cursor: pointer;
    }

    ul{
        list-style: none;
    }

    
`;
