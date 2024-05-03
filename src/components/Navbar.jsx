import { Box, Flex, Link, Spacer, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex as="nav" bg="brand.800" color="white" p={3} align="center">
      <Box p="2">
        <Image src="/images/logo.png" alt="Logo" boxSize={{ base: "50px", md: "60px" }} />
      </Box>
      <Box p="2">
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", backgroundColor: "brand.700" }}>Home</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link as={RouterLink} to="/projects" _hover={{ textDecoration: "none", backgroundColor: "brand.700" }}>Projects</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", backgroundColor: "brand.700" }}>Contact</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;