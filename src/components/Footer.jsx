import { Box, Flex, Link, IconButton, Text } from "@chakra-ui/react";
import { ArrowUpIcon, EmailIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Flex as="footer" bg="blue.500" color="white" p={3} align="center" justify="space-between">
      <Text fontSize="sm">© 2023 My Portfolio</Text>
      <Flex>
        <Link href="https://facebook.com" isExternal><IconButton aria-label="Facebook" icon={<EmailIcon />} /></Link>
        <Link href="https://twitter.com" isExternal><IconButton aria-label="Twitter" icon={<EmailIcon />} /></Link>
        <Link href="https://instagram.com" isExternal><IconButton aria-label="Instagram" icon={<EmailIcon />} /></Link>
      </Flex>
      <IconButton aria-label="Back to top" icon={<ArrowUpIcon />} onClick={() => window.scrollTo(0, 0)} />
    </Flex>
  );
};

export default Footer;