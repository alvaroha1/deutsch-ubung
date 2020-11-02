import React from "react";
import { Emoji, ResultsBox } from "../styles/Results";

interface Props {
  isCorrect: boolean;
  gameEnded: boolean;
}

export const Results: React.FC<Props> = ({ isCorrect, gameEnded }) => {
  if (gameEnded) {
    if (isCorrect) {
      return (
        <ResultsBox>
          <Emoji>👍</Emoji>
        </ResultsBox>
      );
    } else {
      return (
        <ResultsBox>
          <Emoji>👎</Emoji>
        </ResultsBox>
      );
    }
  } else {
    return (
      <ResultsBox>
        <Emoji>🤔</Emoji>
      </ResultsBox>
    );
  }
};
