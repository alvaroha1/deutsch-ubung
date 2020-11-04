import styled from "styled-components";

export const WelcomeMainBox = styled.div`
  align-items: center;
  background-color: var(--white);
  box-shadow: 0 0 20px var(--blackShadow1), 0 0px 40px var(--blackShadow2);
  border-radius: 5px;
  border: solid var(--primary) 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 300px;
  margin: 20px;
`;

export const WelcomeBox = styled.div`
  align-items: center;
  border: solid var(--primary) 1px;
  background-color: var(--white);
  box-shadow: 0 0 20px var(--blackShadow1), 0 0px 40px var(--blackShadow2);
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  color: var(--primary);
  font-weight: 700;
  margin: 20px;
`;

export const Title = styled.h1`
  color: var(--primary);
  font-weight: 700;
  margin: 20px;
  text-align: center;
`;
