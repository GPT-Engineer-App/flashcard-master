import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';

function CreateFlashcard() {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    const question = event.target.elements.question.value;
    const answer = event.target.elements.answer.value;

    const newFlashcard = { question, answer };
    const existingFlashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    existingFlashcards.push(newFlashcard);
    localStorage.setItem('flashcards', JSON.stringify(existingFlashcards));

    toast({
      title: 'Flashcard created.',
      description: "We've added your flashcard.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    event.target.reset();
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel htmlFor='question'>Question</FormLabel>
          <Input id='question' placeholder='Enter question' />
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel htmlFor='answer'>Answer</FormLabel>
          <Input id='answer' placeholder='Enter answer' />
        </FormControl>
        <Button mt={4} colorScheme='teal' type='submit'>Create Flashcard</Button>
      </form>
    </Box>
  );
}

export default CreateFlashcard;