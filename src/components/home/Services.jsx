import { Box, Text, Heading, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion'; 
import { Link } from "react-router-dom"; 

import services from '../../assets/services.jpg';

const MotionBox = motion(Box); 

const Services = () => {
  return (
    <Box
      w="100%"
      h={{ base: 'auto', md: '500px' }}
      backgroundImage={services}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="start"
      p={{ base: 6, md: 12 }}
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={1}
      />

      <MotionBox
        zIndex={2}
        maxW="700px"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Heading as="h1" size={{ base: 'lg', md: '2xl' }} mb={4}>
          Stay ahead with predictive algorithms that help schedule maintenance before issues occur.
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} mb={6}>
          At our company, we offer a comprehensive suite of services designed to streamline your plant operations 
          and maximize efficiency. From real-time data analysis to predictive maintenance, our cutting-edge 
          solutions empower you to stay ahead of potential issues and maintain peak performance across your facility.
        </Text>
        <Link to="/services">
        <MotionBox
          as={Button}
          colorScheme="yellow"
          size="lg"
          _hover={{ bg: 'yellow.500' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Services &rarr;
        </MotionBox>
        
        </Link>
      </MotionBox>
    </Box>
  );
};

export default Services;
