import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  Image,
  Button, 
} from '@chakra-ui/react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Nav = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="green.900" w={"full"} position={"fixed"} top={0} left={0} zIndex={1000} color="green.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Flex alignItems="center">
        <RouterLink to="/">
          <Image
            src={logo}
            alt="MechPlantCare Logo"
            boxSize="40px"
            mr={4}
            borderRadius="md" 
          />
        </RouterLink>
        </Flex>

        {/* Desktop Menu */}
        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Link as={RouterLink} to="/" px={4} _hover={{ color: 'green.300' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" px={4} _hover={{ color: 'green.300' }}>
            About Us
          </Link>
          <Link as={RouterLink} to="/services" px={4} _hover={{ color: 'green.300' }}>
            Services
          </Link>
          <Link as={RouterLink} to="/contact" px={4} _hover={{ color: 'green.300' }}>
            Contact Us
          </Link>

          
        </Flex>
        <Button
            as={RouterLink}
            to="/contact"
            colorScheme="yellow"
            variant="solid"
            ml={4}
            display={{ base: 'none', md: 'inline-flex' }} 
          >
            Contact Us
          </Button>
        {/* Mobile Menu Toggle */}
        <IconButton
          size="md"
          icon={isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          aria-label="Toggle Navigation"
          display={{ md: 'none' }}
          onClick={onToggle}
          ml={4}
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link as={RouterLink} to="/" px={4} _hover={{ color: 'green.300' }}>
              Home
            </Link>
            <Link as={RouterLink} to="/about" px={4} _hover={{ color: 'green.300' }}>
              About Us
            </Link>
            <Link as={RouterLink} to="/services" px={4} _hover={{ color: 'green.300' }}>
              Services
            </Link>
            <Link as={RouterLink} to="/contact" px={4} _hover={{ color: 'green.300' }}>
              Contact Us
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Nav;
