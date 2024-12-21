import { useIsMobile } from '@/hooks/useIsMobile';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  EmailIcon,
  StarIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  Text,
  useStyleConfig,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SidebarAccordion } from './SidebarAccordion';

export const Sidebar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  const sidebarStyles = useStyleConfig('sidebar');

  return (
    <Box
      as="aside"
      width={isCollapsed ? '60px' : '240px'}
      height="100%"
      transition="width 0.3s"
      overflow="hidden"
      boxShadow="lg"
      sx={sidebarStyles}
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
          icon={isCollapsed ? <ArrowRightIcon /> : <ArrowLeftIcon />}
          onClick={toggleSidebar}
          variant="ghost"
        />
      </Flex>
      <VStack align={isCollapsed ? 'center' : 'stretch'} mt={4} spacing={4}>
        <IconButton
          variant="ghost"
          aria-label="Schedule"
          icon={isCollapsed ? <CalendarIcon /> : undefined}
        >
          {isCollapsed ? null : <Text>Schedule</Text>}
        </IconButton>
        <IconButton
          variant="ghost"
          aria-label="Favorites"
          icon={isCollapsed ? <StarIcon /> : undefined}
        >
          {isCollapsed ? null : <Text>Favorites</Text>}
        </IconButton>
        <IconButton
          variant="ghost"
          aria-label="Messages"
          icon={isCollapsed ? <EmailIcon /> : undefined}
        >
          {isCollapsed ? null : <Text>Messages</Text>}
        </IconButton>
        <SidebarAccordion isCollapsed={isCollapsed} />
      </VStack>
    </Box>
  );
};
