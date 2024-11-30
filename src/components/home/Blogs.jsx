import { Box, SimpleGrid, Image, Text, Heading, Icon, Link, Flex } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";

// Blog data array
const blogPosts = [
  {
    title: "Predictive Maintenance: The Future of Plant Operations",
    description:
      "With predictive maintenance, plants can now anticipate and address machinery issues before they cause any downtime. MechPlantCare’s advanced algorithms help predict failures and optimize maintenance schedules.",
    image: blog1,
    link: "#",
  },
  {
    title: "How Real-Time Monitoring Improves Efficiency",
    description:
      "Real-time monitoring allows plant operators to track equipment performance instantly. MechPlantCare’s monitoring tools provide critical insights that help operators prevent breakdowns and maximize uptime.",
    image: blog2,
    link: "#",
  },
  {
    title: "Data-Driven Insights for Smarter Decisions",
    description:
      "Data is the key to smarter decision-making. MechPlantCare turns complex plant data into actionable insights that help operators optimize their maintenance routines and increase overall efficiency.",
    image: blog3,
    link: "#",
  },
  {
    title: "The Importance of Customizable Dashboards for Plant Managers",
    description:
      "Every plant manager has different priorities. MechPlantCare’s customizable dashboards allow managers to focus on the metrics that matter most, giving them full control over plant performance.",
    image: blog4,
    link: "#",
  },
];

// Motion Box using Framer Motion
const MotionBox = motion(Box);

// BlogCard Component
const BlogCard = ({ title, description, image, link }) => (
  <MotionBox
    bg="#123524"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="lg"
    transition="transform 0.3s ease-in-out"
    _hover={{ transform: "scale(1.05)" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    {/* Image Section */}
    <Box position="relative">
      <Image src={image} alt={title} objectFit="cover" w="100%" h="200px" />
      <Link href={link} isExternal>
        <Icon
          as={FiArrowUpRight}
          boxSize={8}
          color="black"
          bg="#c1b80d"
          borderRadius="50%"
          position="absolute"
          top={4}
          right={4}
          p={1}
        />
      </Link>
    </Box>

    {/* Text Section */}
    <Box p={6} color="white">
      <Heading fontSize="xl" mb={3}>
        {title}
      </Heading>
      <Text fontSize="md" opacity={0.8}>
        {description}
      </Text>
    </Box>
  </MotionBox>
);

// Blogs Section Component
const Blogs = () => (
  <Box bg="#0d1b12" py={10} px={{ base: 4, md: 8 }}>
    {/* Section Header */}
    <Flex justifyContent="flex-start" mb={6}>
      <Text
        color="white"
        bg="transparent"
        border="1px solid white"
        px={3}
        py={1}
        borderRadius="full"
        fontWeight="bold"
        width={100}
        align="center"
      >
        Blog
      </Text>
    </Flex>

    {/* Blog Grid */}
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {blogPosts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </SimpleGrid>
  </Box>
);

export default Blogs;
