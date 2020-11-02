import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root { 
    --primary: #118dfa;
    --secondary: rgb(218, 230, 244);
    --black: rgb(0,0,0)
    --white: rgb(255,255,255)
    --blackShadow1: rgba(0, 0, 0, .05);
    --blackShadow2: rgba(0, 0, 0, .08);

    /* --white: rgb(255, 255, 255); 
    --red: #e31b23; 
    --bodyColor: #ecf1f6; 
    --borderFormEls: hsl(0, 0%, 10%); 
    --bgFormEls: #09ab00; 
    --bgFormElsFocus:#1781e3; 
    --darkBlue: #012755; 
    --midBlue: #004585; 
    --mildBlue: #1781e3; 
    --lightBlue: #ecf1f6; 
    --grey: #a8a4a3;
    --primaryColor: #919191; 
    --primary: #337ab7;
    --success: #5cb85c;
    --info: #5bc0de;
    --warning: #f0ad4e;
    --danger: #d9534f;
    --gray-darker: #222;
    --gray-dark: #333;
    --gray: #555;
    --gray-light: #777;
    --gray-lighter: #eee;
    --facebook: #3b5998;
    --google: #ea4335;
    --github: var(--gray-dark);
    --cb-blue: #4285F4;
    --cb-green: #00D490;
    --cb-yellow: #FFCF50;
    --cb-red: #DA5847; */
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
