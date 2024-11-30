import { Box, SimpleGrid, Text, Avatar, VStack, Heading, Icon, Flex } from '@chakra-ui/react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion'; 


const testimonials = [
  {
    name: 'John Doe',
    role: 'Plant Manager',
    image: 'path/to/john-image.jpg',
    stars: 5,
    feedback:
      'MechPlantCare has revolutionized our plant’s maintenance operations. Their predictive analytics have helped us schedule repairs before issues even arise, reducing downtime and boosting overall productivity. We are now more efficient than ever.',
  },
  {
    name: 'Alice Smith',
    role: 'Industrial Mechanic',
    image: 'path/to/alice-image.jpg',
    stars: 5,
    feedback:
      'The real-time monitoring system provided by MechPlantCare has been invaluable. We can now keep track of all our machines and immediately address any problems, resulting in fewer breakdowns and a smoother workflow.',
  },
  {
    name: 'James Brown',
    role: 'Operations Lead',
    image: 'path/to/james-image.jpg',
    stars: 4.5,
    feedback:
      'Since implementing MechPlantCare, our operations have run significantly smoother. The customizable dashboards and automated reports keep us ahead of any potential issues, and the support from the team is excellent.',
  },
];


const StarRating = ({ stars }) => {
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 !== 0;
  return (
    <Flex mb={2}>
      {[...Array(fullStars)].map((_, i) => (
        <Icon as={FaStar} key={i} color="#FFD700" w={5} h={5} />
      ))}
      {halfStar && <Icon as={FaStar} color="#FFD700" opacity={0.5} w={5} h={5} />}
    </Flex>
  );
};


const MotionBox = motion(Box); 

const TestimonialCard = ({ name, role, image, stars, feedback }) => (
  <MotionBox
    bg="white"
    boxShadow="md"
    borderRadius="lg"
    p={6}
    textAlign="center"
    position="relative"
    _hover={{ boxShadow: 'lg', transform: 'scale(1.03)', transition: '0.3s' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <Icon as={FaQuoteRight} color="#c1b80d" w={8} h={8} position="absolute" top={-5} right={5} />
    <StarRating stars={stars} />
    <Text mb={4} color="gray.700">
      "{feedback}"
    </Text>
    <VStack>
      <Avatar name={name} src={image} size="lg" mb={2} />
      <Heading fontSize="lg" fontWeight="bold">
        {name}
      </Heading>
      <Text color="gray.500">{role}</Text>
    </VStack>
  </MotionBox>
);


const TestimonialSection = () => (
  <Box p={{ base: 4, md: 10 }} bg="#fafaf0">
    <VStack spacing={4} textAlign="center" mb={8}>
      <Heading fontSize={{ base: '2xl', md: '4xl' }}>What Our Clients Say</Heading>
      <Text maxW="600px" color="gray.600">
        At MechPlantCare, our clients appreciate the seamless, data-driven approach we take to optimize plant maintenance. Here’s what they have to say:
      </Text>
    </VStack>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </SimpleGrid>
  </Box>
);

export default TestimonialSection;
