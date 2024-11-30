import React from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

import herobg from "../../assets/herobg.webp";

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2, 
      duration: 0.6,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MotionVStack = motion(VStack); 

const Hero = () => {
  return (
    <Box
      as="section"
      bgImage={herobg}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      <MotionVStack
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        spacing={6}
        alignItems="flex-start"
        p={8}
        borderRadius="md"
        color="white"
        maxW={{ base: "3xl", md: "full", lg: "3xl" }}
        w="full"
      >
        <motion.div variants={itemVariant}>
          <Heading
            textAlign="left"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            Revolutionizing Industrial Maintenance <br />
            with Cutting-Edge Technology
          </Heading>
        </motion.div>

        <motion.div variants={itemVariant}>
          <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
            Empowering plant mechanics with real-time data analysis, predictive
            maintenance, and comprehensive diagnostics to minimize downtime and
            maximize efficiency.
          </Text>
        </motion.div>

        <motion.div variants={itemVariant}>
          <Link to="/about">
            <Button
              size="lg"
              colorScheme="yellow"
              leftIcon={<FaPlay />}
              rightIcon={<BsArrowRight />}
              width={300}
            >
              Learn More
            </Button>
          
          </Link>
        </motion.div>
      </MotionVStack>
    </Box>
  );
};

export default Hero;