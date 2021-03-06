import styled from "styled-components";

export const MainButton = styled.button`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid var(--primary);
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: var(--primary);
  background-color: var(--white);
  font-size: 1.1em;
  width: 200px;
  text-align: center;
  transition: all 0.2s;
  &:hover {
    background-color: var(--primary);
    color: var(--secondary);
  }
`;
