import { Container, VStack, Input, Textarea, Button, Heading } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" py={5}>
      <VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
        <Heading>Contact Me</Heading>
        <Input placeholder="Your Name" size="lg" />
        <Input placeholder="Your Email" type="email" size="lg" />
        <Textarea placeholder="Your Message" size="lg" />
        <Button mt={4} colorScheme="blue" type="submit">Send Message</Button>
      </VStack>
    </Container>
  );
};

export default Contact;