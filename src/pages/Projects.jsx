import { Container, Text, VStack, Heading, SimpleGrid, Box } from "@chakra-ui/react";

const ProjectItem = ({ title, description }) => (
  <Box p={5} shadow="md" borderWidth="1px" borderColor="brand.800">
    <Heading fontSize="xl" fontFamily="'Courier New', Courier, monospace">{title}</Heading>
    <Text mt={4} fontFamily="'Courier New', Courier, monospace">{description}</Text>
  </Box>
);

const Projects = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={8}>
        <Heading>Projects</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <ProjectItem title="Project 1" description="This is a description of project 1." />
          <ProjectItem title="Project 2" description="This is a description of project 2." />
          <ProjectItem title="Project 3" description="This is a description of project 3." />
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Projects;