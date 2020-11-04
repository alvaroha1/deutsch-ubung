import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root { 
    --primary: #118dfa;
    --secondary: rgb(218, 230, 244);
    --black: rgb(0,0,0)
    --white: rgb(255,255,255)
    --blackShadow1: rgba(0, 0, 0, .05);
    --blackShadow2: rgba(0, 0, 0, .08);
}

* { 
  padding: 0; 
  margin: 0; 
  box-sizing: border-box; 
  outline: none; 
}
 
body { 
  font: 18px/1.5 "Open Sans", sans-serif; 
  background: var(--white); 
  color: var(--primary); 
  margin: 1.5rem 0; 
}
 
h1 { 
  font-weight: 500; 
  font-family: "TheSans",sans-serif; 
  text-rendering: optimizeLegibility; 
  width: 100%; 
}
 
 p {
  font-family:'Roboto',sans-serif;
  font-weight:300;
  }
`;
