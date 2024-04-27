import React from "react";
import { Box, List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";

function EditFlashcards() {
  const flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        Edit Flashcards
      </Text>
      <List spacing={3}>
        {flashcards.map((flashcard, index) => (
          <ListItem key={index}>
            <ListIcon as={FaRegEdit} color="green.500" />
            Question: {flashcard.question} - Answer: {flashcard.answer}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default EditFlashcards;
