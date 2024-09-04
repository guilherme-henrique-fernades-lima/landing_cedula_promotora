import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 

@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
  
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body {
    min-height: 100%;    
    height: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    background-color: ${(props) => props.theme.colors.backgroundPage};
  }  

  ::selection {
    background: ${(props) => props.theme.colors.brand};
    color: ${(props) => props.theme.colors.secondBrand};
  }
       
  ::-webkit-scrollbar {
    width: 6px;   
  }
  
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.backgroundPage};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.brand}; 
  }
  
`;
export default GlobalStyle;
