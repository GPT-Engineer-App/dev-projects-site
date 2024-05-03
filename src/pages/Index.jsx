import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading fontFamily="'Press Start 2P', 'Courier New', monospace">Welcome to My Portfolio</Heading>
        <Text fontSize="xl" color="brand.700" fontFamily="'Courier New', Courier, monospace">Explore my projects and get in touch!</Text>
      </VStack>
    </Container>
  );
};

export default Index;