import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Scroll Bar
    *::-webkit-scrollbar {
    width: 10px;
    }

    *::-webkit-scrollbar-track {
    background: transparent;
    }

    *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        //width: 100%;
        img{
            display: block;
        }
    }
    h2{
        font-size: 2rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h4{
        padding: .7rem;
        color: #333;
    }
    p{
        font-size: 1rem;
        font-weight: 500;
        line-height: 200%;
        color: 696969;
    }
    a{
        text-decoration: none;
        color: #333;
        &:hover{
            cursor: pointer;
        }
    }
    input{
        font-weight: bold;
        font-weight: "Montserrat", sans-serif;
    }
`;

export default GlobalStyle;
