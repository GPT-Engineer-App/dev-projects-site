import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Flex as="footer" bg="blue.500" color="white" p={3} align="center" justify="space-between">
      <Text fontSize="sm">© 2023 My Portfolio</Text>
      <Flex>
        <Link href="https://facebook.com" isExternal>Facebook</Link>
        <Link href="https://twitter.com" isExternal>Twitter</Link>
        <Link href="https://instagram.com" isExternal>Instagram</Link>
      </Flex>
      <Link href="#" onClick={() => window.scrollTo(0, 0)}>Back to Top</Link>
    </Flex>
  );
};

export default Footer;