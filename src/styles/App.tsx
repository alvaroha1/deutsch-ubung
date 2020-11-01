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
  flex-direction: column;
  justify-content: space-around;
`

export const ItemBox = styled.div`
  border: solid 4px green;
  background-color: lightgreen;
`

export const ItemText = styled.p`
  color: brown;
  font-weight: 700;
  margin: 20px;
`