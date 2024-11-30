import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Divider,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const PricingSection = () => {
  const toast = useToast(); 

  const plans = [
    {
      title: 'Basic',
      price: '$20/month',
      features: [
        'Real-time data monitoring',
        'Basic diagnostic tools',
        'Email support',
      ],
      buttonText: 'Start Free Trial',
      isPopular: false,
    },
    {
      title: 'Pro',
      price: '$50/month',
      features: [
        'Everything in Basic',
        'Predictive maintenance',
        'Integration with existing systems',
        'Priority support',
      ],
      buttonText: 'Choose Pro',
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: 'Custom Pricing',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 premium support',
      ],
      buttonText: 'Contact Sales',
      isPopular: false,
    },
  ];

  // Handle button click to show toast
  const handleButtonClick = () => {
    toast({
      title: 'This feature is not available.',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box bg="gray.50" py={12} px={6}>
      {/* Section Heading */}
      <Box textAlign="center" mb={12}>
        <Heading fontSize={{ base: '2xl', md: '4xl' }} color="green.700">
          Flexible Pricing for Every Need
        </Heading>
        <Text mt={4} fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
          Choose a plan that fits your needs. Enjoy a free trial and explore risk-free.
        </Text>
      </Box>

      {/* Pricing Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {plans.map((plan, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="md"
            shadow="md"
            p={8}
            border={plan.isPopular ? '2px solid' : '1px solid'}
            borderColor={plan.isPopular ? 'yellow.400' : 'gray.200'}
          >
            {plan.isPopular && (
              <Text
                textAlign="center"
                fontSize="sm"
                fontWeight="bold"
                color="yellow.600"
                mb={4}
              >
                Most Popular
              </Text>
            )}
            <Heading fontSize="2xl" mb={2} color="green.700">
              {plan.title}
            </Heading>
            <Text fontSize="xl" color="gray.700" mb={6}>
              {plan.price}
            </Text>
            <Divider mb={6} />
            <VStack align="start" spacing={4}>
              {plan.features.map((feature, idx) => (
                <HStack key={idx} spacing={2}>
                  <Icon as={FaCheckCircle} color="green.500" />
                  <Text color="gray.600">{feature}</Text>
                </HStack>
              ))}
            </VStack>
            <Button
              mt={8}
              width="full"
              colorScheme="yellow"
              size="lg"
              variant={plan.isPopular ? 'solid' : 'outline'}
              onClick={handleButtonClick} // Show toast on button click
            >
              {plan.buttonText}
            </Button>
          </Box>
        ))}
      </SimpleGrid>

      {/* Free Trial Info */}
      <Box textAlign="center" mt={12}>
        <Text fontSize="lg" color="gray.700">
          Try any plan free for 14 days. No credit card required.
        </Text>
      </Box>
    </Box>
  );
};

export default PricingSection;
