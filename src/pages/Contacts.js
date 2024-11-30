import React from 'react';
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Icon,
  VStack,
  HStack,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import contacts from '../assets/contacts.webp'
const Contacts = () => {
  return (
    <Box bg="gray.50" w="full">
     
      <Box
        height="80vh"
        backgroundImage={contacts}
        backgroundSize="cover"
        backgroundPosition="center"
        bgColor="rgba(0,0,0,0.5)" 
        bgBlendMode="overlay"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        textAlign="center"
        px={6}
      >
        <Heading fontSize={{ base: '2xl', md: '5xl' }}>Get in Touch</Heading>
        <Text mt={4} fontSize={{ base: 'md', md: 'lg' }}>
          We're here to help and answer any question you might have. Reach out to us!
        </Text>
      </Box>

      {/* Contact Section */}
      <Box py={12} px={6}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {/* Contact Form */}
          <Box bg="white" p={8} borderRadius="md" shadow="md">
            <Heading as="h2" fontSize="2xl" mb={4} color="green.700">
              Contact Form
            </Heading>
            <VStack spacing={4} align="stretch">
              <Input placeholder="Your Name" size="md" focusBorderColor="green.500" />
              <Input placeholder="Your Email" size="md" type="email" focusBorderColor="green.500" />
              <Textarea
                placeholder="Your Message"
                size="md"
                focusBorderColor="green.500"
                rows={6}
              />
              <Button colorScheme="yellow" size="md">
                Send Message
              </Button>
            </VStack>
          </Box>

          {/* Contact Info */}
          <Box>
            <Heading as="h2" fontSize="2xl" mb={4} color="green.700">
              Contact Information
            </Heading>
            <VStack align="start" spacing={4}>
              <HStack>
                <Icon as={FaPhoneAlt} color="yellow.400" w={5} h={5} />
                <Text color="gray.700">(+254) 708 981856</Text>
              </HStack>
              <HStack>
                <Icon as={FaEnvelope} color="yellow.400" w={5} h={5} />
                <Text color="gray.700">alusoemmalyne@gmail.com</Text>
              </HStack>
              <HStack>
                <Icon as={FaMapMarkerAlt} color="yellow.400" w={5} h={5} />
                <Text color="gray.700">72680 00200 Nairobi, kenya</Text>
              </HStack>
            </VStack>
            <Heading as="h2" fontSize="2xl" mt={8} mb={4} color="green.700">
              Follow Us
            </Heading>
            <HStack spacing={6}>
              <Link href="https://www.linkedin.com/in/emmalyne-aluso-6446a1300/" isExternal>
                <Icon as={FaLinkedin} w={6} h={6} color="green.500" _hover={{ color: 'green.700' }} />
              </Link>
              <Link href="https://www.twitter.com" isExternal>
                <Icon as={FaTwitter} w={6} h={6} color="green.500" _hover={{ color: 'green.700' }} />
              </Link>
              <Link href="https://www.facebook.com" isExternal>
                <Icon as={FaFacebook} w={6} h={6} color="green.500" _hover={{ color: 'green.700' }} />
              </Link>
            </HStack>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contacts;
