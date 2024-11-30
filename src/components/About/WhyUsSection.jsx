import React from 'react';
import { Box, Flex, Heading, Text, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaBrain, FaHeartbeat, FaWrench } from 'react-icons/fa';

const WhyUsSection = () => {
  const features = [
    {
      title: 'AI and Machine Learning',
      description:
        'Leverage predictive maintenance powered by AI and machine learning to anticipate issues and minimize downtime.',
      icon: FaBrain,
    },
    {
      title: 'Real-Time Diagnostics',
      description:
        'Receive instant diagnostics and alerts to keep plant operations running smoothly and efficiently.',
      icon: FaHeartbeat,
    },
    {
      title: 'User-Friendly Interface',
      description:
        'Designed specifically for plant mechanics, our tools ensure seamless interaction and ease of use.',
      icon: FaWrench,
    },
  ];

  return (
    <Box bg="gray.50" py={12} px={6}>
      {/* Section Title */}
      <Box textAlign="center" mb={8}>
        <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" color="green.900">
          Why MechPlantCare?
        </Heading>
      </Box>

      {/* Features Grid */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {features.map((feature, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            bg="white"
            p={6}
            borderRadius="md"
            shadow="md"
            textAlign="center"
            _hover={{ shadow: 'lg', transform: 'scale(1.05)' }}
            transition="all 0.3s ease-in-out"
          >
            <Icon as={feature.icon} w={12} h={12} color="#c1b80d" mb={4} />
            <Heading fontSize="lg" fontWeight="bold" mb={2}>
              {feature.title}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              {feature.description}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WhyUsSection;
