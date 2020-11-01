import styled from 'styled-components'

export const AppBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #c9f1ff;
  min-height: 600px;
`

export const ExerciseBox = styled.div`
  display: flex;
  border: solid #05b1f5 3px;
  background-color: #fafafa;
  border-radius: 20px;
  min-height: 400px;
  margin: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const ControlsBox = styled.div`
  display: flex;
  border: solid #05b1f5 3px;
  background-color: #fafafa;
  border-radius: 20px;
  min-height: 200px;
  margin: 20px;
  flex-direction: row;
  justify-content: space-around;
`
export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const ItemBox = styled.div`
  border: solid 4px green;
  background-color: lightgreen;
  height: 60px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const OptionsBox = styled.div`
  border: solid 4px darkorange;
  background-color: orange;
  cursor: pointer;
  margin: 10px;
  height: 60px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  &:hover {
    background-color: pink;
  }
`

export const ItemText = styled.p`
  color: brown;
  font-weight: 700;
  margin: 20px;
`