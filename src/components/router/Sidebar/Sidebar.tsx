import { useIsMobile } from '@/hooks/useIsMobile';
import { useCountriesContext } from '@/store';
import { useSidebarStyles } from '@/ui-components';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  EmailIcon,
  StarIcon,
} from '@chakra-ui/icons';
import { Box, Flex, IconButton, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { SidebarAccordion } from './SidebarAccordion';

export const Sidebar: React.FC = () => {
  const isMobile = useIsMobile();
  const { isCollapsed, setIsCollapsed } = useCountriesContext();
  const sidebarStyles = useSidebarStyles();

  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <Box
      as="aside"
      width={isCollapsed ? '60px' : '240px'}
      height="100%"
      transition="width 0.3s"
      overflow="hidden"
      boxShadow="lg"
      {...sidebarStyles}
    >
      <Flex
        alignItems="center"
        justifyContent={isCollapsed ? 'center' : 'space-between'}
        px={isCollapsed ? 0 : 4}
        py={4}
      >
        {!isCollapsed && (
          <Box fontSize="lg" fontWeight="bold">
            Quick Access
          </Box>
        )}
        <IconButton
          aria-label="Toggle Sidebar"
          colorScheme="green"
          onClick={toggleSidebar}
          variant="ghost"
        >
          {isCollapsed ? <ArrowRightIcon /> : <ArrowLeftIcon />}
        </IconButton>
      </Flex>
      <VStack align={isCollapsed ? 'center' : 'stretch'} mt={4} gap={4}>
        <IconButton variant="ghost" aria-label="Schedule">
          {isCollapsed ? <CalendarIcon /> : undefined}
          {isCollapsed ? null : <Text>Schedule</Text>}
        </IconButton>
        <IconButton variant="ghost" aria-label="Favorites">
          {isCollapsed ? <StarIcon /> : undefined}
          {isCollapsed ? null : <Text>Favorites</Text>}
        </IconButton>
        <IconButton variant="ghost" aria-label="Messages">
          {isCollapsed ? <EmailIcon /> : undefined}
          {isCollapsed ? null : <Text>Messages</Text>}
        </IconButton>
        <SidebarAccordion />
      </VStack>
    </Box>
  );
};
