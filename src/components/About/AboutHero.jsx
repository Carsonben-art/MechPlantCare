import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

import aboutimg from '../../assets/aboutimg.webp'
const AboutHero = () => {
  return (
    <Box
      bgImage={aboutimg}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      bgColor="rgba(0,0,0,0.8)" 
      bgBlendMode="overlay"
    
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        
        p={{ base: 4, md: 8 }}
        color="white"
        alignItems="left"
        w="100%"
        maxW={800}
      >
        {/* Text Content */}
        <Box flex="1" mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
          <Heading color={"#ffffff"} fontSize={{ base: "2xl", md: "5xl" }} mb={4}>
            About MechPlantCare
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
          At MechPlantCare, we’re on a mission to optimize plant maintenance and 
          performance through innovative technology, empowering plant mechanics to 
          work smarter, not harder.
          </Text>
        </Box>

        
      </Flex>
    </Box>
  );
};

export default AboutHero;
