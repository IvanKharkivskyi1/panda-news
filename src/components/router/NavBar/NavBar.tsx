import {
  AuthModal,
  LanguageSwitcher,
  NavLink,
  ThemeSwitcher,
} from '@/components';
import { useLanguage } from '@/store';
import { IconButton, TooltipHover } from '@/ui-components';
import { Box, Flex, Icon, useStyleConfig } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export const NavBar = () => {
  const navStyles = useStyleConfig('nav');
  const subHeaderStyles = useStyleConfig('subHeader');
  const supHeaderStyles = useStyleConfig('supHeader');

  const { translation } = useLanguage();

  const styles = {
    ...navStyles,
    flexWrap: 'wrap',
    gap: 4,
  };

  return (
    <Box as="header">
      <Flex sx={supHeaderStyles}>
        <Flex sx={styles} p={2}>
          <LanguageSwitcher />
          <Flex gap={2}>
            <ThemeSwitcher />
            <TooltipHover label={translation('tooltipGithub')}>
              <IconButton
                as="a"
                aria-label="data-testid-github"
                colorScheme="green"
                size="sm"
                icon={<Icon as={FaGithub} />}
                href="https://github.com/IvanKharkivskyi1/panda-news"
                target="_blank"
                isAnimating
              />
            </TooltipHover>
          </Flex>
        </Flex>
      </Flex>
      <Flex sx={subHeaderStyles}>
        <Flex as="nav" sx={styles} px={2}>
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
