import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" style={{ fontFamily: "Courier New", fontWeight: "bold" }}>Welcome to My Portfolio</Heading>
        <Text fontSize="lg" style={{ fontFamily: "Courier New" }}>Explore my projects and get in touch!</Text>
      </VStack>
    </Container>
  );
};

export default Index;