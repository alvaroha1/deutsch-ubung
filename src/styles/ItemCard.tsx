import styled from 'styled-components'

export const Text = styled.p`
  color: green;
  font-weight: 300;
`
export const Box = styled.div`
  color: #ccc;
  border: 1px solid black;
  cursor: pointer;  
  margin: 6px 0;
  //
  box-sizing: border-box;
  border-radius: 0.6em;
  cursor: pointer;
  display: flex;
  align-self: center;
  margin: 2px;
  padding: 10px;
  text-decoration: none;
  text-align: center;

  font-size: 20px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;

  &:hover,
  &:focus {
    color: red;
    outline: 0;
  }
}
  &:hover {
    box-shadow: 0 0 40px 40px red inset;
  }
`