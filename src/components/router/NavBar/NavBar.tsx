import {
  AuthModal,
  LanguageSwitcher,
  NavLink,
  ThemeSwitcher,
} from '@/components';
import { useLanguage } from '@/store';
import { IconButton, TooltipHover, useNavBarStyles } from '@/ui-components';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export const NavBar = () => {
  const { supHeader, subHeader, nav } = useNavBarStyles();
  const { translation } = useLanguage();

  return (
    <Box as="header">
      <Flex {...supHeader}>
        <Flex {...nav} p={2}>
          <LanguageSwitcher />
          <Flex gap={2}>
            <ThemeSwitcher />
            <TooltipHover label={translation('tooltipGithub')}>
              <IconButton
                as="a"
                aria-label="data-testid-github"
                colorScheme="green"
                size="sm"
                href="https://github.com/IvanKharkivskyi1/panda-news"
                target="_blank"
                isAnimating
              >
                <Icon as={FaGithub} />
              </IconButton>
            </TooltipHover>
          </Flex>
        </Flex>
      </Flex>
      <Flex {...subHeader}>
        <Flex as="nav" {...nav} px={2}>
          <Flex gap={2} flexWrap="wrap">
            <NavLink to="/dashboard">{translation('Dashboard')}</NavLink>
            <NavLink to="/counter">{translation('Counter')}</NavLink>
            <NavLink to="/countries">{translation('Countries')}</NavLink>
            <NavLink to="/calendar">{translation('Calendar')}</NavLink>
            <NavLink to="/matches">{translation('Football Matches')}</NavLink>
            <NavLink to="/new">{translation('News')}</NavLink>
            <NavLink to="/profile">{translation('Profile')}</NavLink>
          </Flex>
          <Flex gap={2}>
            <AuthModal />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
