import React from 'react';
import { Emoji, ResultsBox } from '../styles/Results'

interface Props {
  isCorrect: boolean;
  playing: boolean;
}

export const Results: React.FC<Props> = ({isCorrect, playing}) => {
    if (isCorrect === true && playing) {
      return (<ResultsBox><Emoji>👍</Emoji></ResultsBox>);
    } else if (isCorrect === false && playing) {
      return (<ResultsBox><Emoji>👎</Emoji></ResultsBox>);
    } else {
      return (<ResultsBox><Emoji>🤔</Emoji></ResultsBox>);
    }
};