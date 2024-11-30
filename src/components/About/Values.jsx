import React from 'react';
import { Box, Flex, Text, Heading, Icon, VStack, Image } from '@chakra-ui/react';
import { FaLightbulb, FaTools, FaHandshake, FaUserTie } from 'react-icons/fa';
import innovation from '../../assets/innovation.webp';
import { motion } from 'framer-motion'; 

const Values = () => {
  const values = [
    {
      title: 'Innovation',
      description:
        'Pioneering advanced solutions that redefine plant maintenance. We create tools and technologies that help mechanics work smarter and unlock new possibilities.',
      icon: FaLightbulb,
    },
    {
      title: 'Efficiency',
      description:
        'Maximizing productivity through streamlined processes. Our solutions are designed to save time, reduce effort, and ensure seamless operations.',
      icon: FaTools,
    },
    {
      title: 'Reliability',
      description:
        'Building trust through dependable technology. Our products are built to last, ensuring consistent performance under any conditions.',
      icon: FaHandshake,
    },
    {
      title: 'Customer Focus',
      description:
        'Empowering plant mechanics with tailored solutions. We listen, adapt, and innovate to meet the unique needs of every customer.',
      icon: FaUserTie,
    },
  ];

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      bg="gray.50"
      py={12}
      px={6}
      align="center"
      gap={8}
    >
      {/* Left Content Section */}
      <Box flex="1">
       
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} color="green.900" fontWeight="bold" mb={6}>
            Driving Innovation and Building Trust - Our Core Values.
          </Heading>
        </motion.div>

        {/* Animated Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text fontSize={{ base: 'md', md: 'lg' }} mb={8} color="gray.600">
            At MechPlantCare, we’re committed to delivering cutting-edge solutions that enhance
            plant mechanics' efficiency, reliability, and customer satisfaction. Explore the
            principles that define our work.
          </Text>
        </motion.div>

        {/* Animated Values List */}
        <VStack align="start" spacing={6}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Flex align="start" gap={4}>
                <Icon as={value.icon} w={10} h={10} color="#c1b80d" />
                <Box>
                  <Heading fontSize="lg" fontWeight="bold" mb={2}>
                    {value.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    {value.description}
                  </Text>
                </Box>
              </Flex>
            </motion.div>
          ))}
        </VStack>
      </Box>

      {/* Right Image Section */}
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={innovation}
            alt="MechPlantCare Values"
            borderRadius="md"
            boxShadow="lg"
            maxWidth="100%"
            objectFit="cover"
          />
        </motion.div>
      </Box>
    </Flex>
  );
};

export default Values;
