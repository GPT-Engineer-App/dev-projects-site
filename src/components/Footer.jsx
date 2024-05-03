import { Box, Flex, Link, IconButton, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Flex as="footer" bg="blue.500" color="white" p={3} align="center" justify="space-between">
      <Text fontSize="sm">© 2023 My Portfolio</Text>
      <Flex>
        <Link href="https://facebook.com" isExternal><IconButton aria-label="Facebook" icon={<Box as="span" className="icon-facebook" />} /></Link>
        <Link href="https://twitter.com" isExternal><IconButton aria-label="Twitter" icon={<Box as="span" className="icon-twitter" />} /></Link>
        <Link href="https://instagram.com" isExternal><IconButton aria-label="Instagram" icon={<Box as="span" className="icon-instagram" />} /></Link>
      </Flex>
      <IconButton aria-label="Back to top" icon={<Box as="span" className="icon-arrow-up" />} onClick={() => window.scrollTo(0, 0)} />
    </Flex>
  );
};

export default Footer;