import { extendTheme, StyleFunctionProps, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const sharedStyles = {
  w: 'full',
  maxW: '1400px',
  mx: 'auto',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const customTheme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === 'light' ? 'customGreen.100' : 'mint.800',
      },
      '::-webkit-scrollbar': {
        width: '10px',
        height: '10px',
      },
      '::-webkit-scrollbar-thumb': {
        background: props.colorMode === 'light' ? 'green.200' : 'mint.600',
        borderRadius: '5px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: props.colorMode === 'light' ? 'green.300' : 'mint.700',
      },
      '::-webkit-scrollbar-track': {
        background:
          props.colorMode === 'light' ? 'customGreen.200' : 'mint.800',
      },
    }),
  },
  colors: {
    mint: {
      50: '#e3f9e5',
      100: '#c1f7c1',
      200: '#98ff98',
      300: '#66e766',
      400: '#33d433',
      500: '#00b300',
      600: '#008000',
      700: '#006400',
      800: '#004d00',
      900: '#003300',
    },
    customGreen: {
      50: '#F0FFF4',
      100: '#E8F8E0',
      200: '#E0FFE0',
      300: '#DFFFD6',
      400: '#D4FCD6',
      500: '#CCFFCC',
      600: '#E0F7E0',
      700: '#DFF2D8',
      800: '#C9F9C8',
      900: '#C9F9C8',
    },
  },
  components: {
    NavLink: {
      baseStyle: (props: StyleFunctionProps) => {
        return {
          position: 'relative',
          zIndex: 3,
          color: props.colorMode === 'light' ? 'white' : 'gray.800',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: props.colorMode === 'light' ? 'green.500' : 'green.200',
            transform: 'skew(-18deg)',
            transition: 'background 0.3s',
            zIndex: 0,
          },
          _hover: {
            _before: {
              bg: props.colorMode === 'light' ? 'green.600' : 'green.300',
            },
          },
          _active: {
            _before: {
              bg: props.colorMode === 'light' ? 'green.700' : 'green.400',
            },
          },
          _focus: {
            _before: {
              bg: props.colorMode === 'light' ? 'green.700' : 'green.400',
            },
          },
        };
      },
    },
    nav: {
      baseStyle: {
        ...sharedStyles,
      },
    },
    main: {
      baseStyle: {
        ...sharedStyles,
        flexGrow: 1,
        bg: 'customGreen.200',
        _dark: {
          bg: 'mint.900',
          color: 'white',
        },
      },
    },
    supHeader: {
      baseStyle: {
        bg: 'green.300',
        borderBottom: '1px solid white',
        _dark: {
          bg: 'mint.800',
          color: 'white',
        },
      },
    },
    subHeader: {
      baseStyle: {
        bg: 'green.200',
        _dark: {
          bg: 'mint.700',
          color: 'white',
        },
      },
    },
    sidebar: {
      baseStyle: {
        bg: 'green.200',
        _dark: {
          bg: 'mint.700',
          color: 'white',
        },
      },
    },
  },
});
