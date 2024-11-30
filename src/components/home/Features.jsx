import React from 'react';
import { Box, SimpleGrid, Text, Icon, Heading } from '@chakra-ui/react';
import { MdOutlineMonitorHeart, MdAnalytics, MdDashboard, MdReport, MdInsights, MdSettings } from 'react-icons/md';
import { motion } from 'framer-motion'; 

const features = [
  {
    title: 'Real-Time Monitoring',
    description: 'Continuous monitoring and reporting on machinery performance.',
    icon: MdOutlineMonitorHeart,
    colSpan: { base: 1, lg: 2 },
  },
  {
    title: 'Predictive Analytics',
    description: 'Machine learning algorithms predict equipment failures to reduce unnecessary maintenance costs.',
    icon: MdAnalytics,
    colSpan: 1,
  },
  {
    title: 'Customizable Dashboards',
    description: 'Personalize dashboards to focus on the most critical metrics for specific plant operations.',
    icon: MdDashboard,
    colSpan: 1,
  },
  {
    title: 'Reporting & Alerts',
    description: 'Automated reports and real-time alerts notify plant mechanics about issues immediately.',
    icon: MdReport,
    colSpan: { base: 1, lg: 2 },
  },
  {
    title: 'Data-Driven Insights',
    description: 'Turn complex data into actionable insights, empowering smarter decisions.',
    icon: MdInsights,
    colSpan: 1,
  },
  {
    title: 'Compatibility with Industrial Equipment',
    description: 'Works seamlessly with various types of machinery, integrating easily with existing systems.',
    icon: MdSettings,
    colSpan: 1,
  },
];


const MotionFeatureCard = motion(Box); 

const FeatureCard = ({ title, description, icon }) => (
  <MotionFeatureCard
    p={6}
    borderRadius="lg"
    boxShadow="lg"
    bg="white"
    _hover={{
      transform: 'scale(1.05)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      transition: '0.3s ease-in-out',
    }}
    display="flex"
    flexDirection="column"
    alignItems="center"
    textAlign="center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon as={icon} w={12} h={12} color="#c1b80d" mb={4} />
    <Heading size="md" mb={2} color="gray.700">
      {title}
    </Heading>
    <Text color="gray.600">{description}</Text>
  </MotionFeatureCard>
);

const Features = () => {
  return (
    <Box p={{ base: 4, md: 10 }} bg="#f9f9f9">
      <Text textAlign={"center"} fontSize={{ base: "xl", lg: "5xl" }} fontWeight={800} p={10}>
        Features
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {features.map((feature, index) => (
          <Box key={index} colSpan={feature.colSpan} as="article">
            <FeatureCard {...feature} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
