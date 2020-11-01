import React, {useState} from 'react';
import { ItemCard } from './components/ItemCard'
import { AppBox, ExerciseBox, ControlsBox, ItemBox, ItemText } from './styles/App' 

function App() {
  // const dasGenus: string[] = ["Maskulinum", "Femininum", "Neutrum", "Plural"];
  const diePronomen: string[] = ["ich", "du", "er", "sie", "es", "wir", "ihr", "sie", "Sie"];
  const dasVerben: string[] = ["schaue", "schaust", "schaut", "schaut", "schaut", "schauen", "schaut", "schauen", "schauen"]
  const dieWorte: string[] = ["Hund", "Katze", "Auto", "Reichtümer"]
  
  // const [gender, setGender] = React.useState("");
  const [pronoun, setPronoun] = React.useState("");
  const [verben, setVerben] = React.useState("");
  const [worte, setWorte] = React.useState("");
  const [input, setInput] = React.useState("");
  const [answer, setAnswer] = React.useState("");


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
    const number = Math.floor(Math.random() * diePronomen.length)
    setVerben(dasVerben[number]);
    setPronoun(diePronomen[number])
    const number2 = Math.floor(Math.random() * 4)
    setWorte(dieWorte[number2]);
  }

  return (
    <AppBox>
      <ExerciseBox>
        <ItemBox>
        <ItemText>{pronoun}</ItemText>
        </ItemBox>
        <ItemBox>
        <ItemText>{verben}</ItemText>
        </ItemBox>
        <input value={answer} onChange={updateAnswer}></input>
        <ItemBox>
        <ItemText>{worte}</ItemText>
        </ItemBox>
      </ExerciseBox>
        <ControlsBox>
        <button onClick={start}>Start</button>
        <button>Correct</button>
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
