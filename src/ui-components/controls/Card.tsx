import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export const Card = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      _dark={{ bg: 'gray.800' }}
    >
      {children}
    </Box>
  );
};
