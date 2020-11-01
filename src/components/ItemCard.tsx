import React from 'react';
import { Text, Box } from '../styles/ItemCard'


interface Props {
  content: string;
  setValue?: any;
}

export const ItemCard: React.FC<Props> = ({content, setValue}) => {
  // console.log(props)
  return (
    <Box onClick={(e)=>setValue(e)}>
      <Text>{content}</Text>
    </Box>
  )
};