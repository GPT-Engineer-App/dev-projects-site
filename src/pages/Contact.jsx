import { Container, VStack, Input, Textarea, Button, Heading } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" py={5}>
      <VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
        <Heading>Contact Me</Heading>
        <Input placeholder="Your Name" size="lg" style={{ fontFamily: "Courier New", backgroundColor: "#f4f4f4" }} />
        <Input placeholder="Your Email" type="email" size="lg" style={{ fontFamily: "Courier New", backgroundColor: "#f4f4f4" }} />
        <Textarea placeholder="Your Message" size="lg" style={{ fontFamily: "Courier New", backgroundColor: "#f4f4f4" }} />
        <Button mt={4} colorScheme="brand" type="submit" style={{ fontFamily: "Courier New" }}>Send Message</Button>
      </VStack>
    </Container>
  );
};

export default Contact;