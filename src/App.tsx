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
  BigOptionBox,
  Emoji,
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
import { dieVerbenAkkusativ, dieVerbenDativ } from "./content/Verben";

// To Do s
// Refactor in smaller pieces

function App() {
  const diePronomen: string[] = [
    "Ich",
    "Du",
    "Er",
    "Sie",
    "Es",
    "Wir",
    "Ihr",
    "Sie",
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
  const dieVerben: string[][][] = [dieVerbenAkkusativ, dieVerbenDativ];
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
    setSelectedSolution(event.target.textContent);
  };

  const start = (): void => {
    setSelectedSolution("");
    const numberGood = Math.floor(Math.random() * diePronomen.length);
    // Casus
    const casusNumber = Math.floor(Math.random() * dieVerben.length); // 0 akk 1 dat
    const whichVerb = Math.floor(Math.random() * dieVerben[casusNumber].length);
    setVerben(dieVerben[casusNumber][whichVerb][numberGood]);

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

    let altCasus;

    if (casusNumber === 1) {
      altCasus = 0;
    } else {
      altCasus = 1;
    }
    console.log(numberGender)

    let altGenus = 0;

    if (numberGender === 0 || numberGender === 1) {
      altGenus = numberGender + 1;
    } else {
      altGenus = numberGender - 1;
    }
    possibleSolutionsGenerated.push(diePossesivPronomen[altCasus][numberGender][numberGood]);
    possibleSolutionsGenerated.push(diePossesivPronomen[casusNumber][altGenus][numberGood]);
    possibleSolutionsGenerated.push(diePossesivPronomen[altCasus][altGenus][numberGood]);

    const shuffledSolutions = shuffleArray(possibleSolutionsGenerated);

    setPossessivePronoun(
      diePossesivPronomen[casusNumber][numberGender][numberGood]
    );
    setPossibleSolutions(shuffledSolutions);

    setPlaying(true);
    setGameEnded(false);
  };

  const endGame = (): void => {
    setGameEnded(true);
    if (possessivePronoun === selectedSolution) {
      setIsCorrect(true);
    } else {
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
            if (!gameEnded) {
              if (possibleSolution === selectedSolution) {
                return (
                  <BigOptionBox key={index}>
                    <OptionsBox key={index} selected={true}>
                      <ItemText>{possibleSolution}</ItemText>
                    </OptionsBox>
                  </BigOptionBox>
                );
              } else {
                return (
                  <BigOptionBox key={index}>
                    <OptionsBox
                      key={index}
                      onClick={pickSolution}
                      selected={false}
                    >
                      <ItemText>{possibleSolution}</ItemText>
                    </OptionsBox>
                  </BigOptionBox>
                );
              }
            } else {
              if (possibleSolution === possessivePronoun) {
                return (
                  <BigOptionBox key={index}>
                    <OptionsBox key={index} selected={false}>
                      <ItemText>{possibleSolution}</ItemText>
                    </OptionsBox>
                    <Emoji>✅</Emoji>
                  </BigOptionBox>
                );
              } else if (possibleSolution === selectedSolution) {
                return (
                  <BigOptionBox key={index}>
                    <OptionsBox key={index} selected={true}>
                      <ItemText>{possibleSolution}</ItemText>
                    </OptionsBox>
                    <Emoji>❌</Emoji>
                  </BigOptionBox>
                );
              } else {
                return (
                  <BigOptionBox key={index}>
                    <OptionsBox
                      key={index}
                      onClick={pickSolution}
                      selected={false}
                    >
                      <ItemText>{possibleSolution}</ItemText>
                    </OptionsBox>
                    <Emoji>❌</Emoji>
                  </BigOptionBox>
                );
              }
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
            {!gameEnded ? (
              <MainButton onClick={start}>Anfangen 🚀</MainButton>
            ) : (
              <MainButton onClick={start}>Restart 🎉</MainButton>
            )}
            <MainButton disabled={!playing} onClick={endGame}>
              Korrigieren 📝
            </MainButton>
          </ButtonsBox>
          <Results isCorrect={isCorrect} gameEnded={gameEnded} />
        </ControlsBox>
      </AppBox>
    </Fragment>
  );
}

export default App;
