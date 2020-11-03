import styled from 'styled-components'

export const WelcomeMainBox = styled.div`
  display: flex;
  border: solid var(--primary) 1px;
  background-color: var(--white);
  min-height: 300px;
  margin: 20px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 20px var(--blackShadow1), 0 0px 40px var(--blackShadow2);
  border-radius: 5px;
`

export const WelcomeBox = styled.div`
  border: solid var(--primary) 1px;
  background-color: var(--white);
  box-shadow: 0 0 20px var(--blackShadow1), 0 0px 40px var(--blackShadow2);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  color: var(--primary);
  font-weight: 700;
  margin: 20px;
`

export const Title = styled.h1`
  color: var(--primary);
  font-weight: 700;
  margin: 20px;
  text-align: center;
`