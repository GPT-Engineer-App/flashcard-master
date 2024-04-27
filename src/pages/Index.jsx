import { useState } from "react";
import { Box, Button, Flex, Text, VStack, IconButton, useColorModeValue, Heading } from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const defaultFlashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
  { question: "What year did the Titanic sink?", answer: "1912" },
  { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" },
];
const storedFlashcards = JSON.parse(localStorage.getItem("flashcards"));
const flashcards = storedFlashcards || defaultFlashcards;

const Index = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setCurrentCard((prevCard) => (prevCard - 1 + flashcards.length) % flashcards.length);
  };

  const toggleAnswer = () => {
    if (!showAnswer) {
      const userAnswer = prompt("What's your answer?");
      if (userAnswer.toLowerCase() === flashcards[currentCard].answer.toLowerCase()) {
        setScore((prevScore) => prevScore + 1);
        alert("Correct!");
      } else {
        alert("Wrong! The correct answer is: " + flashcards[currentCard].answer);
      }
    }
    setShowAnswer(!showAnswer);
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const cardColor = useColorModeValue("white", "gray.800");

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={4} bg={bgColor}>
      <VStack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardColor} w="sm">
          <Heading mb={4}>
            Flashcard {currentCard + 1} of {flashcards.length}
          </Heading>
          <Text fontSize="xl" mb={6}>
            {flashcards[currentCard].question}
          </Text>
          {showAnswer && (
            <Text fontSize="lg" fontWeight="bold">
              {flashcards[currentCard].answer}
            </Text>
          )}
          <Text fontSize="lg" mt={4}>
            Score: {score}
          </Text>
          <Button mt={4} colorScheme="blue" onClick={toggleAnswer}>
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </Button>
        </Box>
        <Flex>
          <IconButton aria-label="Previous card" icon={<FaArrowLeft />} onClick={prevCard} isRound mr={2} />
          <IconButton aria-label="Next card" icon={<FaArrowRight />} onClick={nextCard} isRound />
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Index;
