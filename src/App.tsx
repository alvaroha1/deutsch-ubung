import React, {ReactElement, Fragment} from 'react';
import { Results } from './components/Results'
import { Welcome } from './components/Welcome'
import { Navbar } from './components/Navbar'
import UserContext from "./components/User"
import {GlobalStyle} from "./styles/GlobalStyles"
import { AppBox, ExerciseBox, ControlsBox, ItemBox, ItemText, ButtonsBox, OptionsBox } from './styles/App'
import { MainButton } from './styles/Buttons';

// To Do s
// Selected style
// Refactor in smaller pieces
// Algorythm implement akk and dat and new pronomen
// Extract logic from content
// Deploy 

function App() {
  // Types state?

  // const dasGenus: string[] = ["Maskulinum", "Femininum", "Neutrum", "Plural"];
  const diePronomen: string[] = ["ich", "du", "er", "sie", "es", "wir", "ihr", "sie", "Sie"];
  // Worte
  const dasMaskulinum: string[] = ["Hund", "Vater", "Montag", "Käse"];
  const dasFemininum: string[] = ["Katze", "Mutter", "Schokolade", "Milch"];
  const dasNeutrum: string[] = ["Auto", "Kaninchen", "Robot", "Flugzeug"];
  const derPlural: string[] = ["Reichtümer", "Flaschen", "Bücher", "Nachspeisen"];
  const dieWorte: string[][] = [dasMaskulinum, dasFemininum, dasNeutrum, derPlural];
  // Pronomen
  const diePossesivPronomenAkkusativ: string[] = ["meinen", "deinen", "seinen", "ihren", "seinen", "unseren", "euren", "ihren", "ihren"];
  const diePossesivPronomenDativ: string[] = ["meinen", "deinen", "seinen", "ihren", "seinen", "unseren", "euren", "ihren", "ihren"];
  const diePossesivPronomen: string[][] = [diePossesivPronomenAkkusativ, diePossesivPronomenDativ]
  // Verben
  const dasVerbenAkkusativ: string[] = ["schaue", "schaust", "schaut", "schaut", "schaut", "schauen", "schaut", "schauen", "schauen"]
  const dasVerbenDativ: string[] = ["folge", "folgst", "folgt", "folgt", "folgt", "folgen", "folgt", "folgen", "folgen"]
  const dieVerben: string[][] = [dasVerbenAkkusativ, dasVerbenDativ];
  // schauen and zeigen + akk
  
  // const [gender, setGender] = React.useState("");
  const [pronoun, setPronoun] = React.useState("");
  const [verben, setVerben] = React.useState("");
  const [worte, setWorte] = React.useState("");
  // const [input, setInput] = React.useState("");
  // const [answer, setAnswer] = React.useState("");
  const [playing, setPlaying] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [gameEnded, setGameEnded] = React.useState(false);
  const [possessivePronoun, setPossessivePronoun] = React.useState("");
  const [selectedSolution, setSelectedSolution] = React.useState("");
  const [possibleSolutions, setPossibleSolutions] = React.useState(["", ""]);



  // const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("hey", event)
  //   setInput(event.target.value);
  // }

  // const updateAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAnswer(event.target.value);
  // }

  const pickSolution = (event: React.ChangeEvent<any>) => {
    if (selectedSolution === "") {
      setSelectedSolution(event.target.textContent);
    }
  }

  // const setValue = (event: React.MouseEvent<HTMLElement>) => {
  //   console.log("hey", event)
  // }

  const start = (): void => {
    setSelectedSolution("");
    const numberGood = Math.floor(Math.random() * diePronomen.length)
    // Casus
    const casusNumber = Math.floor(Math.random() * dieVerben.length); // 0 akk 1 dat
    setVerben(dieVerben[casusNumber][numberGood]);

    setPronoun(diePronomen[numberGood])
    const numberGender = Math.floor(Math.random() * 4)
    const numberWord = Math.floor(Math.random() * dieWorte[numberGender].length)

    setWorte(dieWorte[numberGender][numberWord]);
    // fake options, use shuffle
    const fakeNumber1 = Math.floor(Math.random() * diePronomen.length);
    const fakeNumber2 = Math.floor(Math.random() * diePronomen.length);
    const fakeNumber3 = Math.floor(Math.random() * diePronomen.length);

    const possibleSolutionsGenerated = [diePossesivPronomen[casusNumber][numberGood], diePossesivPronomenAkkusativ[fakeNumber1], diePossesivPronomenAkkusativ[fakeNumber2], diePossesivPronomenAkkusativ[fakeNumber3]]
    setPossessivePronoun(diePossesivPronomenAkkusativ[numberGood]); // afegir dimensio
    console.log(possibleSolutions)
    setPossibleSolutions(possibleSolutionsGenerated);

 

    setPlaying(true);
    setGameEnded(false);
  }

  const endGame = (): void => {
    setGameEnded(true);
    console.log("Game Ended")
    console.log({ possibleSolutions, possessivePronoun })
    if (possessivePronoun === selectedSolution) {
      console.log("YOU WIN")
      setIsCorrect(true);
    } else {
      console.log("YOU LOSE")
      setIsCorrect(false);
    }

  }

  // const user = {};
  // if (process.env.NODE_ENV === "development") { user.baseURL: string = "test" } 

  function game(): ReactElement {
    return (
      // <UserContext.Provider value={user}>
       

      <ExerciseBox>
        <ItemBox>
          <ItemText>{pronoun}</ItemText>
        </ItemBox>
        <ItemBox>
          <ItemText>{verben}</ItemText>
        </ItemBox>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
          {possibleSolutions.map((possibleSolution, index) => {
            if (possibleSolution === selectedSolution) {
              return (  <OptionsBox key={index} selected={true} >
                <ItemText>{possibleSolution}</ItemText>
              </OptionsBox>)
            } else {
              return (  <OptionsBox key={index} onClick={pickSolution} selected={false}>
                <ItemText>{possibleSolution}</ItemText>
              </OptionsBox>)
          }
       
        } )}
        </div>
  
        <ItemBox>
          <ItemText>{worte}</ItemText>
        </ItemBox>
          </ExerciseBox>
        // </UserContext.Provider>
    );
  }

  return (
    <Fragment>
    <GlobalStyle />
      <AppBox>
        <Navbar />
      {!playing ? <Welcome /> : game()}
      <ControlsBox>
        <ButtonsBox>
          <MainButton onClick={start}>Anfangen</MainButton>
          <MainButton disabled={!playing} onClick={endGame}>Korrigieren</MainButton>
        </ButtonsBox>
        <Results isCorrect={isCorrect} gameEnded={gameEnded}/>
      </ControlsBox>
    
      {/* <input value={input} onChange={updateInput} /> */}
      {/* <div onClick={updateClick} >BUTTON</div>*/}
      </AppBox>
      </Fragment>
  );
}

export default App;
