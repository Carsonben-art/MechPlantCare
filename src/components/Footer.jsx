import React from 'react';
import { Box, Container, Flex, IconButton, Input, Button, Stack, Text, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="green.50" py={10} borderTop="1px solid" borderColor="gray.200">
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          wrap="wrap"
        >
          {/* Left Section */}
          <Box mb={{ base: 6, md: 0 }}>
            <Text fontSize="xl" fontWeight="bold" color="green.700" mb={2}>
              MechPlantCare
            </Text>
            <Text color="gray.600" mb={4}>
            At MechPlantCare, we’re on a mission to optimize plant maintenance and performance <br/>
            through innovative technology, empowering plant mechanics to work smarter, not harder.
            </Text>
            <Stack direction="row" spacing={4}>
              <IconButton
                as="a"
                href="#"
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                colorScheme="green"
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                colorScheme="green"
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                colorScheme="green"
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Dribbble"
                icon={<FaDribbble />}
                variant="ghost"
                colorScheme="green"
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Pinterest"
                icon={<FaPinterest />}
                variant="ghost"
                colorScheme="green"
              />
            </Stack>
          </Box>

          {/* Right Section */}
          <Box bg="green.200" p={6} rounded="md" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" color="green.800" mb={4}>
              Stay Tuned
            </Text>
            <Text color="green.700" mb={4}>
              Subscribe to our newsletter and never miss our news.
            </Text>
            <Flex as="form">
              <Input
                placeholder="Email"
                variant="outline"
                bg="white"
                borderColor="gray.300"
                _focus={{ borderColor: 'green.500' }}
                mr={2}
              />
              <Button colorScheme="green" type="submit">
                Start Now
              </Button>
            </Flex>
          </Box>
        </Flex>

        {/* Bottom Section */}
        <Flex
          mt={10}
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          color="gray.500"
        >
          <Text fontSize="sm">© MechPlantCare. All Rights Reserved. Licensing</Text>
          <Stack direction="row" spacing={6} mt={{ base: 4, md: 0 }}>
            <Link href="/" fontSize="sm">
              Home
            </Link>
            <Link href="/about" fontSize="sm">
              About Us
            </Link>
            <Link href="services" fontSize="sm">
              Services
            </Link>
            <Link href="/contact" fontSize="sm">
              Contact Us
            </Link>
            
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;