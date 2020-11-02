import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`:root { --white: #afafaf; --red: #e31b23; --bodyColor: #ecf1f6; --borderFormEls: hsl(0, 0%, 10%); --bgFormEls: #09ab00; --bgFormElsFocus:#1781e3; --darkBlue: #012755; --midBlue: #004585; --mildBlue: #1781e3; --lightBlue: #ecf1f6; --grey: #a8a4a3;
 --primaryColor: #919191; // CUE Dark grey --secondaryColor: #f8f8f8; // CUE Light Grey --thirdColor: #09ab00 // CUE green /* --primaryColor: #2d3c46; // CUE Dark grey --secondaryColor: #e1e6eb; // CUE Light Grey --thirdColor: #dc0028 // CUE green */ }
 // Cue Colors /* light-grey #f8f8f8 */ /* dark-grey #919191 */ /* green #09ab00 */
 * { padding: 0; margin: 0; box-sizing: border-box; outline: none; }
 body { font: 18px/1.5 "Open Sans", sans-serif; background: var(--secondaryColor); color: var(--primaryColor); margin: 1.5rem 0; }
 h1 { background-color: var(--thirdColor); color: var(--secondaryColor); margin-bottom: 1.5rem; font-size: 42px; line-height: 28px; font-weight: 500; font-family: "TheSans",sans-serif; text-rendering: optimizeLegibility; padding: 15px; width: 100%; }
 h3 { color: var(--thirdColor); }
 p { color: var(--primaryColor); font-family:'Roboto',sans-serif; font-weight:300; padding: 15px; }`;
