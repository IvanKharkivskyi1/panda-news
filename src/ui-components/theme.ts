import { ThemeContext } from '@/store';
import { createSystem, defaultConfig } from '@chakra-ui/react';
import { useContext } from 'react';

export const sharedStyles = {
  w: { value: 'full' },
  maxW: { value: '1400px' },
  mx: { value: 'auto' },
  justifyContent: { value: 'space-between' },
  alignItems: { value: 'center' },
};

// Налаштування теми
export const system = createSystem(
  {
    ...defaultConfig,
  },
  {
    theme: {
      tokens: {
        colors: {
          mint: {
            50: { value: '#e3f9e5' },
            100: { value: '#c1f7c1' },
            200: { value: '#98ff98' },
            300: { value: '#66e766' },
            400: { value: '#33d433' },
            500: { value: '#00b300' },
            600: { value: '#008000' },
            700: { value: '#006400' },
            800: { value: '#004d00' },
            900: { value: '#003300' },
          },
          customGreen: {
            50: { value: '#F0FFF4' },
            100: { value: '#E8F8E0' },
            200: { value: '#E0FFE0' },
            300: { value: '#DFFFD6' },
            400: { value: '#D4FCD6' },
            500: { value: '#CCFFCC' },
            600: { value: '#E0F7E0' },
            700: { value: '#DFF2D8' },
            800: { value: '#C9F9C8' },
            900: { value: '#C9F9C8' },
          },
        },
        fonts: {
          heading: { value: `'Figtree', sans-serif` },
          body: { value: `'Figtree', sans-serif` },
        },
      },
    },
  }
);

export const components = {
  // NavLink: {
  //   baseStyle: {
  //     position: { value: 'relative' },
  //     zIndex: { value: 3 },
  //     color: { value: 'var(--chakra-colors-text)' },
  //     _before: {
  //       content: { value: '""' },
  //       position: { value: 'absolute' },
  //       top: { value: 0 },
  //       right: { value: 0 },
  //       bottom: { value: 0 },
  //       left: { value: 0 },
  //       bg: { value: 'var(--chakra-colors-accent)' },
  //       transform: { value: 'skew(-18deg)' },
  //       transition: { value: 'background 0.3s' },
  //       zIndex: { value: 0 },
  //     },
  //     _hover: {
  //       _before: {
  //         bg: { value: 'var(--chakra-colors-hover)' },
  //       },
  //     },
  //     _active: {
  //       _before: {
  //         bg: { value: 'var(--chakra-colors-active)' },
  //       },
  //     },
  //     _focus: {
  //       _before: {
  //         bg: { value: 'var(--chakra-colors-active)' },
  //       },
  //     },
  //   },
  // },
  // Main: {
  //   baseStyle: {
  //     ...sharedStyles,
  //     flexGrow: { value: 1 },
  //     bg: { value: 'var(--chakra-colors-bg)' },
  //     color: { value: 'var(--chakra-colors-text)' },
  //   },
  // },
  // SupHeader: {
  //   baseStyle: {
  //     bg: { value: 'green.300' },
  //     borderBottom: { value: '1px solid white' },
  //     _dark: {
  //       bg: { value: 'mint.800' },
  //       color: { value: 'white' },
  //     },
  //   },
  // },
  // SubHeader: {
  //   baseStyle: {
  //     bg: { value: 'green.200' },
  //     _dark: {
  //       bg: { value: 'mint.700' },
  //       color: { value: 'white' },
  //     },
  //   },
  // },
};

export const useMainStyles = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error(
      'useSidebarStyles must be used within a ThemeContext provider'
    );
  }

  return {
    flexGrow: { value: 1 },
    bg: { value: 'var(--chakra-colors-bg)' },
    color: { value: 'var(--chakra-colors-text)' },
  };
};
export const useSidebarStyles = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error(
      'useSidebarStyles must be used within a ThemeContext provider'
    );
  }

  const { isDarkTheme } = themeContext;

  return {
    bg: isDarkTheme ? 'mint.700' : 'green.200',
    color: isDarkTheme ? 'white' : 'black',
  };
};
// hooks/useNavBarStyles.ts
export const useNavBarStyles = () => {
  return {
    supHeader: {
      bg: 'green.200',
      px: 4,
      py: 2,
      _dark: { bg: 'mint.800', color: 'white' },
    },
    subHeader: {
      bg: 'green.300',
      px: 4,
      py: 2,
      _dark: { bg: 'mint.700', color: 'white' },
    },
    nav: {
      w: 'full',
      maxW: '1400px',
      mx: 'auto',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 4,
    },
  };
};
export const useNavLinkStyles = () => {
  return {
    position: 'relative',
    zIndex: 3,
    color: 'var(--chakra-colors-text)',
    _before: {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      bg: 'var(--chakra-colors-accent)',
      transform: 'skew(-18deg)',
      transition: 'background 0.3s',
      zIndex: 0,
    },
    _hover: {
      _before: {
        bg: 'var(--chakra-colors-hover)',
      },
    },
    _active: {
      _before: {
        bg: 'var(--chakra-colors-active)',
      },
    },
    _focus: {
      _before: {
        bg: 'var(--chakra-colors-active)',
      },
    },
  };
};
