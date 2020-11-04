import styled from "styled-components";

export const AppBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 600px;
`;

export const ExerciseBox = styled.div`
  display: flex;
  border: solid var(--primary) 1px;
  background-color: var(--white);
  box-shadow: 0 0 20px var(--blackShadow1), 0 0px 40px var(--blackShadow2);
  border-radius: 5px;
  min-height: 300px;
  margin: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ControlsBox = styled.div`
  display: flex;
  border: solid var(--primary) 1px;
  background-color: var(--white);
  box-shadow: 0 0 20px var(--blackShadow1), 0 0px 40px var(--blackShadow2);
  border-radius: 5px;
  min-height: 200px;
  margin: 0px 20px;
  flex-direction: row;
  justify-content: space-around;
`;
export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ItemBox = styled.div`
  border: solid var(--primary) 1px;
  background-color: var(--white);
  box-shadow: 0 0 20px var(--blackShadow1), 0 0px 40px var(--blackShadow2);
  border-radius: 5px;
  height: 60px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllSolutionsBox = styled.div`
  display: "flex";
  flex-direction: "column";
  justify-content: "space-evenly";
`;

interface OptionsBoxProps {
  selected?: boolean;
}

export const OptionsBox = styled.div<OptionsBoxProps>`
  border: solid var(--primary) 3px;
  background-color: ${(props) => (props.selected ? "#118dfa" : "white")};
  box-shadow: 0 0 20px var(--blackShadow1), 0 0px 40px var(--blackShadow2);
  border-radius: 5px;
  color: ${(props) => (props.selected ? "white" : "#118dfa")};
  cursor: pointer;
  margin: 10px;
  height: 60px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--primary);
    color: var(--secondary);
  }
`;

export const ItemText = styled.p`
  font-weight: 700;
  margin: 20px;
`;

export const BigOptionBox = styled.div`
  align-items: center;
  display: flex;
`;

export const Emoji = styled.p`
  font-size: 1.1rem;
`;
