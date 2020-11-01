import React, {ReactElement} from 'react';
import { Results } from './components/Results'
import { Welcome } from './components/Welcome'
import { AppBox, ExerciseBox, ControlsBox, ItemBox, ItemText, ButtonsBox, OptionsBox } from './styles/App' 

function App() {
  // const dasGenus: string[] = ["Maskulinum", "Femininum", "Neutrum", "Plural"];
  const diePronomen: string[] = ["ich", "du", "er", "sie", "es", "wir", "ihr", "sie", "Sie"];
  const dasVerben: string[] = ["schaue", "schaust", "schaut", "schaut", "schaut", "schauen", "schaut", "schauen", "schauen"]
  const dieWorte: string[] = ["Hund", "Katze", "Auto", "Reichtümer"]
  const diePossesivPronomenAkkusativ: string[] = ["meinen", "deinen","seinen", "ihren", "seinen", "unseren","euren", "ihren", "ihren"];
  // schauen and zeigen + akk
  
  // const [gender, setGender] = React.useState("");
  const [pronoun, setPronoun] = React.useState("");
  const [verben, setVerben] = React.useState("");
  const [worte, setWorte] = React.useState("");
  const [input, setInput] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [playing, setPlaying] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [possessivePronoun, setPossessivePronoun] = React.useState("");
  const [selectedSolution, setSelectedSolution] = React.useState("");
  const [possibleSolutions, setPossibleSolutions] = React.useState(["", ""]);



  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("hey", event)
    setInput(event.target.value);
  }

  const updateAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  }

  const updateClick = (event: React.ChangeEvent<any>) => {
    console.log("hey", event)
  }

  const setValue = (event: React.MouseEvent<HTMLElement>) => {
    console.log("hey", event)
    console.log(event.target, "lalala")
  }

  const start = (): void => {
    const numberGood = Math.floor(Math.random() * diePronomen.length)
    setVerben(dasVerben[numberGood]);
    setPronoun(diePronomen[numberGood])
    const numberWord = Math.floor(Math.random() * 4)
    setWorte(dieWorte[numberWord]);
    //
    const fakeNumber1 = Math.floor(Math.random() * diePronomen.length);
    const fakeNumber2 = Math.floor(Math.random() * diePronomen.length);
    const fakeNumber3 = Math.floor(Math.random() * diePronomen.length);

    const possibleSolutionsGenerated = [diePossesivPronomenAkkusativ[numberGood], diePossesivPronomenAkkusativ[fakeNumber1], diePossesivPronomenAkkusativ[fakeNumber2], diePossesivPronomenAkkusativ[fakeNumber3]]
    setPossessivePronoun(diePossesivPronomenAkkusativ[numberGood]);
    console.log(possibleSolutions)
    setPossibleSolutions(possibleSolutionsGenerated);

    

    setPlaying(true);
  }

  function game(): ReactElement {
    return (
      <ExerciseBox>
        <ItemBox>
          <ItemText>{pronoun}</ItemText>
        </ItemBox>
        <ItemBox>
          <ItemText>{verben}</ItemText>
        </ItemBox>
        {/* <ItemBox>
          <ItemText>{possessivePronoun}</ItemText>
        </ItemBox> */}
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
        {possibleSolutions.map((possibleSolution, index) => {
          return (  <OptionsBox key={index}>
            <ItemText onClick={updateClick} selected={possibleSolution === selectedSolution ? true : false }>{possibleSolution}</ItemText>
          </OptionsBox>)
        } )}
        </div>
  
        <ItemBox>
          <ItemText>{worte}</ItemText>
        </ItemBox>
      </ExerciseBox>
    );
  }

  return (
    <AppBox>
      {!playing ? <Welcome /> : game()}
      <ControlsBox>
        <ButtonsBox>
          <button onClick={start}>Anfangen</button>
          <button>Korrigieren</button>
        </ButtonsBox>
        {!playing ? null : <Results isCorrect={isCorrect} playing={playing}/>}
      </ControlsBox>
      {/* <TagsBox>{dasGenus.map(genderText => <ItemCard content={genderText} setValue={setValue}/>)}</TagsBox>
      <TagsBox>{diePronomen.map(pronomenText => <ItemCard content={pronomenText} setValue={setValue}/>)}</TagsBox>
      <TagsBox><p>Nominativ</p></TagsBox> */}
      {/* <input value={input} onChange={updateInput} /> */}
      {/* <div onClick={updateClick} >BUTTON</div>
      <p>test</p> */}
    </AppBox>
  );
}

export default App;
