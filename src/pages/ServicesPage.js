import React from 'react';
import { Box, Heading, Text, Flex, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaChartLine, FaCogs, FaTools, FaLayerGroup, FaMobileAlt, FaDesktop } from 'react-icons/fa';
import services from '../assets/services.webp'
const ServicesPage = () => {
  const keyFeatures = [
    {
      title: 'Real-Time Data Analysis',
      description: 'Monitor machine health in real-time with detailed analytics.',
      icon: FaChartLine,
    },
    {
      title: 'Predictive Maintenance',
      description: 'Stay ahead with predictive algorithms that help schedule maintenance before issues occur.',
      icon: FaCogs,
    },
    {
      title: 'Comprehensive Diagnostic Tools',
      description: 'Diagnose problems quickly with in-depth reports and tools designed for ease of use.',
      icon: FaTools,
    },
    {
      title: 'Integration with Existing Systems',
      description: 'Seamlessly integrate with your current plant management software for enhanced functionality.',
      icon: FaLayerGroup,
    },
    {
      title: 'User-Friendly Interface',
      description: 'Simple design that allows plant mechanics to focus on the task at hand with minimal training.',
      icon: FaDesktop,
    },
    {
      title: 'Mobile and Desktop Access',
      description: 'Access your diagnostics from anywhere, whether on-site or remote.',
      icon: FaMobileAlt,
    },
  ];

  const benefits = [
    {
      title: 'Reduced Downtime',
      description: 'Keep production lines running smoothly.',
    },
    {
      title: 'Improved Efficiency',
      description: 'Identify and address issues before they cause major disruptions.',
    },
    {
      title: 'Cost Savings',
      description: 'Avoid unnecessary repairs and maintenance costs by predicting problems early.',
    },
  ];

  return (
    <Box bg="gray.50" >
      
     <Box
     textAlign="center"
     mb={12}
     height="80vh"
     display="flex"
     flexDirection="column"
     justifyContent="center"
     alignItems="center"
     backgroundImage={services}
     backgroundSize="cover"
     backgroundPosition="center"
     backgroundRepeat="no-repeat"
     bgColor="rgba(0,0,0,0.5)" 
     bgBlendMode="overlay" 
   >
     <Heading as="h1" fontSize={{ base: '2xl', md: '5xl' }} color="white">
       Our Products & Services
     </Heading>
     <Text mt={4} fontSize={{ base: 'md', md: 'xl' }} color="gray.200">
       Discover how our software can help reduce machine downtime <br/> and improve operational efficiency.
     </Text>
   </Box>
   

      {/* Key Features Section */}
      <Box mb={16} py={12} px={6}>
        <Heading as="h2" fontSize={{ base: 'xl', md: '3xl' }} mb={6} color="green.700">
          Key Features
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {keyFeatures.map((feature, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              bg="white"
              p={6}
              borderRadius="md"
              shadow="md"
              _hover={{ shadow: 'lg', transform: 'scale(1.05)' }}
              transition="all 0.3s ease-in-out"
            >
              <Icon as={feature.icon} w={10} h={10} color="yellow.400" mb={4} />
              <Heading fontSize="lg" color="green.800" mb={2}>
                {feature.title}
              </Heading>
              <Text fontSize="sm" color="gray.600">
                {feature.description}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

      {/* Benefits Section */}
      <Box mb={16} py={12} px={6}>
        <Heading as="h2" fontSize={{ base: 'xl', md: '3xl' }} mb={6} color="green.700">
          Benefits to Customers
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {benefits.map((benefit, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              bg="white"
              p={6}
              borderRadius="md"
              shadow="md"
              _hover={{ shadow: 'lg', transform: 'scale(1.05)' }}
              transition="all 0.3s ease-in-out"
            >
              <Heading fontSize="lg" color="green.800" mb={2}>
                {benefit.title}
              </Heading>
              <Text fontSize="sm" color="gray.600">
                {benefit.description}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

    </Box>
  );
};

export default ServicesPage;
