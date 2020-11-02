import React from 'react';
import { Text, WelcomeBox, Title, WelcomeMainBox } from '../styles/Welcome'

export const Welcome: React.FC = () => {
  return (
    <WelcomeMainBox>
      <Title>Possessivpronomen Übung</Title>
    <WelcomeBox>
      <Text>
        Bitte Klicken sie Anfangen um Possesiv Pronomen zu üben
      </Text>
    </WelcomeBox>
  </WelcomeMainBox>
)
};