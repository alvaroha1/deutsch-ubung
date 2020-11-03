import React, { ReactElement, Fragment } from "react";
import { Results } from "./components/Results";
import { Welcome } from "./components/Welcome";
import { Navbar } from "./components/Navbar";
import { GlobalStyle } from "./styles/GlobalStyles";
import {
  AppBox,
  ExerciseBox,
  ControlsBox,
  ItemBox,
  ItemText,
  ButtonsBox,
  OptionsBox,
  AllSolutionsBox,
} from "./styles/App";
import { MainButton } from "./styles/Buttons";
import { shuffleArray } from "./helpers";
import {
  dasMaskulinum,
  dasFemininum,
  dasNeutrum,
  derPlural,
} from "./content/Worte";
import {
  diePossesivPronomenAkkusativMas,
  diePossesivPronomenAkkusativFem,
  diePossesivPronomenAkkusativNeu,
  diePossesivPronomenAkkusativPl,
} from "./content/PronomenAkk";
import {
  diePossesivPronomenDativMas,
  diePossesivPronomenDativFem,
  diePossesivPronomenDativNeu,
  diePossesivPronomenDativPl,
} from "./content/PronomenDat";

// To Do s
// Selected style - show answer
// Refactor in smaller pieces
// Deploy

function App() {
  // Types state?
  const diePronomen: string[] = [
    "ich",
    "du",
    "er",
    "sie",
    "es",
    "wir",
    "ihr",
    "sie",
    "Sie",
  ];
  // Worte
  const dieWorte: string[][] = [
    dasMaskulinum,
    dasFemininum,
    dasNeutrum,
    derPlural,
  ];
  // Pronomen
  const diePossesivPronomenAkkusativ: string[][] = [
    diePossesivPronomenAkkusativMas,
    diePossesivPronomenAkkusativFem,
    diePossesivPronomenAkkusativNeu,
    diePossesivPronomenAkkusativPl,
  ];
  const diePossesivPronomenDativ: string[][] = [
    diePossesivPronomenDativMas,
    diePossesivPronomenDativFem,
    diePossesivPronomenDativNeu,
    diePossesivPronomenDativPl,
  ];
  const diePossesivPronomen: string[][][] = [
    diePossesivPronomenAkkusativ,
    diePossesivPronomenDativ,
  ];
  // Verben
  const dasVerbenAkkusativ: string[] = [
    "schaue",
    "schaust",
    "schaut",
    "schaut",
    "schaut",
    "schauen",
    "schaut",
    "schauen",
    "schauen",
  ];
  const dasVerbenDativ: string[] = [
    "folge",
    "folgst",
    "folgt",
    "folgt",
    "folgt",
    "folgen",
    "folgt",
    "folgen",
    "folgen",
  ];
  const dieVerben: string[][] = [dasVerbenAkkusativ, dasVerbenDativ];
  // schauen and zeigen + akk
  // folgen + dat

  const [pronoun, setPronoun] = React.useState("");
  const [verben, setVerben] = React.useState("");
  const [worte, setWorte] = React.useState("");
  const [playing, setPlaying] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [gameEnded, setGameEnded] = React.useState(false);
  const [possessivePronoun, setPossessivePronoun] = React.useState("");
  const [selectedSolution, setSelectedSolution] = React.useState("");
  const [possibleSolutions, setPossibleSolutions] = React.useState(["", ""]);

  const pickSolution = (event: React.ChangeEvent<any>) => {
    if (selectedSolution === "") {
      setSelectedSolution(event.target.textContent);
    }
  };

  const start = (): void => {
    setSelectedSolution("");
    const numberGood = Math.floor(Math.random() * diePronomen.length);
    // Casus
    const casusNumber = Math.floor(Math.random() * dieVerben.length); // 0 akk 1 dat
    setVerben(dieVerben[casusNumber][numberGood]);

    setPronoun(diePronomen[numberGood]);
    const numberGender = Math.floor(Math.random() * 4);
    const numberWord = Math.floor(
      Math.random() * dieWorte[numberGender].length
    );

    setWorte(dieWorte[numberGender][numberWord]);

    let allOptions: string[] = [
      ...diePossesivPronomenAkkusativMas,
      ...diePossesivPronomenAkkusativFem,
      ...diePossesivPronomenAkkusativNeu,
      ...diePossesivPronomenAkkusativPl,
      ...diePossesivPronomenDativMas,
      ...diePossesivPronomenDativFem,
      ...diePossesivPronomenDativNeu,
      ...diePossesivPronomenDativPl,
    ];
    let randomOptions = shuffleArray(allOptions);

    const possibleSolutionsGenerated = [
      diePossesivPronomen[casusNumber][numberGender][numberGood],
    ];
    // Millorar
    possibleSolutionsGenerated.push(randomOptions[0]);
    possibleSolutionsGenerated.push(randomOptions[1]);
    possibleSolutionsGenerated.push(randomOptions[2]);

    const shuffledSolutions = shuffleArray(possibleSolutionsGenerated);

    setPossessivePronoun(
      diePossesivPronomen[casusNumber][numberGender][numberGood]
    ); // afegir dimensio
    console.log(possibleSolutions, "sol");
    setPossibleSolutions(shuffledSolutions);

    setPlaying(true);
    setGameEnded(false);
  };

  const endGame = (): void => {
    setGameEnded(true);
    console.log("Game Ended");
    console.log({ possibleSolutions, possessivePronoun });
    if (possessivePronoun === selectedSolution) {
      console.log("YOU WIN");
      setIsCorrect(true);
    } else {
      console.log("YOU LOSE");
      setIsCorrect(false);
    }
  };

  function game(): ReactElement {
    return (
      <ExerciseBox>
        <ItemBox>
          <ItemText>{pronoun}</ItemText>
        </ItemBox>
        <ItemBox>
          <ItemText>{verben}</ItemText>
        </ItemBox>
        <AllSolutionsBox>
          {possibleSolutions.map((possibleSolution, index) => {
            if (possibleSolution === selectedSolution) {
              return (
                <OptionsBox key={index} selected={true}>
                  <ItemText>{possibleSolution}</ItemText>
                </OptionsBox>
              );
            } else {
              return (
                <OptionsBox key={index} onClick={pickSolution} selected={false}>
                  <ItemText>{possibleSolution}</ItemText>
                </OptionsBox>
              );
            }
          })}
        </AllSolutionsBox>
        <ItemBox>
          <ItemText>{worte}</ItemText>
        </ItemBox>
      </ExerciseBox>
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
            <MainButton disabled={!playing} onClick={endGame}>
              Korrigieren
            </MainButton>
          </ButtonsBox>
          <Results isCorrect={isCorrect} gameEnded={gameEnded} />
        </ControlsBox>
      </AppBox>
    </Fragment>
  );
}

export default App;
