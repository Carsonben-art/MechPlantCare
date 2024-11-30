import React from "react";
import { Box, Button, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom"; 
import heroimage from '../../assets/about.jpg';

// Framer Motion Variants
const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MotionFlex = motion(Flex); // Motion-enhanced Flex
const MotionBox = motion(Box); // Motion-enhanced Box
const MotionVStack = motion(VStack); // Motion-enhanced VStack
const MotionButton = motion(Button); // Motion-enhanced Button

const AboutSection = () => {
  return (
    <Box as="section" py={10} px={6} bg="#f7ffb6">
      <MotionFlex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={6}
        maxW="6xl"
        mx="auto"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Image */}
        <MotionBox flex="1" variants={itemVariant}>
          <Image
            src={heroimage}
            alt="Locally grown food"
            borderRadius="md"
            objectFit="cover"
            w="100%"
            maxH="400px"
          />
        </MotionBox>

        {/* Right: Text Content */}
        <MotionVStack
          flex="1"
          align="flex-start"
          spacing={4}
          textAlign={{ base: "center", md: "left" }}
          variants={itemVariant}
        >
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            We’re on a mission to optimize plant maintenance and performance
          </Heading>
          <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.700">
            At MechPlantCare, we’re on a mission to optimize plant maintenance
            and performance through innovative technology, empowering plant
            mechanics to work smarter, not harder.
          </Text>
          
          {/* Button to navigate to About Us page */}
          <Link to="/about">
            <MotionButton
              size="lg"
              colorScheme="yellow"
              variant="solid"
              rightIcon={<IoArrowForward />}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </MotionButton>
          </Link>
        </MotionVStack>
      </MotionFlex>
    </Box>
  );
};

export default AboutSection;
