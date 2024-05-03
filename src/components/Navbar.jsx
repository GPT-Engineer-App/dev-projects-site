import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex as="nav" bg="blue.500" color="white" p={3} align="center">
      <Box p="2">
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>Home</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link as={RouterLink} to="/projects" _hover={{ textDecoration: "none" }}>Projects</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none" }}>Contact</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;