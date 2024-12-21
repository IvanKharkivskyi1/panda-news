import { Sidebar } from '@/components';
import { Flex, useStyleConfig } from '@chakra-ui/react';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const styles = useStyleConfig('main');

  return (
    <Flex
      sx={styles}
      overflow="hidden"
      p={2}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Sidebar />
      <Flex flex="1" pl={{ base: 1, md: 4 }} overflow="auto" h="100% ">
        {children}
      </Flex>
    </Flex>
  );
};
