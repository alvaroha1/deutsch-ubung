import styled from 'styled-components'

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

export const ItemBox = styled.div`
  border: solid 4px green;
  background-color: lightgreen;
  height: 60px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ItemText = styled.p`
  color: brown;
  font-weight: 700;
  margin: 20px;
`