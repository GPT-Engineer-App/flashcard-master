import React, { useState } from "react";
import { Box, List, ListItem, ListIcon, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";

function EditFlashcards() {
  const flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

  const [isOpen, setIsOpen] = useState(false);
  const [currentFlashcard, setCurrentFlashcard] = useState({});

  const handleOpenModal = (flashcard) => {
    setCurrentFlashcard(flashcard);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSave = () => {
    const flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];
    const updatedFlashcards = flashcards.map((f) => {
      if (f.question === currentFlashcard.question) {
        return { ...f, question: currentFlashcard.question, answer: currentFlashcard.answer };
      }
      return f;
    });
    localStorage.setItem("flashcards", JSON.stringify(updatedFlashcards));
    handleCloseModal();
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        Edit Flashcards
      </Text>
      <List spacing={3}>
        {flashcards.map((flashcard, index) => (
          <ListItem key={index} cursor="pointer" onClick={() => handleOpenModal(flashcard)}>
            <ListIcon as={FaRegEdit} color="green.500" />
            Question: {flashcard.question} - Answer: {flashcard.answer}
          </ListItem>
        ))}
      </List>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Flashcard</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Question</FormLabel>
              <Input value={currentFlashcard.question} onChange={(e) => setCurrentFlashcard({ ...currentFlashcard, question: e.target.value })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Answer</FormLabel>
              <Input value={currentFlashcard.answer} onChange={(e) => setCurrentFlashcard({ ...currentFlashcard, answer: e.target.value })} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button onClick={handleCloseModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default EditFlashcards;
