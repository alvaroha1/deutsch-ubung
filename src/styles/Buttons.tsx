import styled from "styled-components";

export const MainButton = styled.button`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid var(--primaryColor);
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: var(--primaryColor);
  background-color: var(--secondaryColor);
  text-align: center;
  transition: all 0.2s;
  &:hover {
    background-color: var(--primaryColor);
    color: var(--secondaryColor);
  }
  @media all and (max-width: 30em) {
    display: block;
    margin: 0.4em auto;
  }
`;

// implementation
//  <MainButton onClick={() => showExistingForm()}> <span>Vorhandenen Artikel pushen</span> </MainButton>