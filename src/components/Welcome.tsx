import React from "react";
import { Text, WelcomeBox, Title, WelcomeMainBox } from "../styles/Welcome";

export const Welcome: React.FC = () => {
  return (
    <WelcomeMainBox>
      <Title>Possessivpronomen Übung</Title>
      <WelcomeBox>
        <Text>Bitte Klicken Sie Anfangen, um Possessivpronomen zu üben</Text>
      </WelcomeBox>
    </WelcomeMainBox>
  );
};
