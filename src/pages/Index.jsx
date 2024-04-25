import { useState } from "react";
import { Box, Button, Flex, Text, useColorMode, VStack, IconButton, useColorModeValue, Heading } from "@chakra-ui/react";
import { FaSun, FaMoon, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
  { question: "What year did the Titanic sink?", answer: "1912" },
  { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" },
];

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setCurrentCard((prevCard) => (prevCard - 1 + flashcards.length) % flashcards.length);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const cardColor = useColorModeValue("white", "gray.800");

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={4} bg={bgColor}>
      <VStack spacing={8}>
        <IconButton aria-label="Toggle color mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} isRound />
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
