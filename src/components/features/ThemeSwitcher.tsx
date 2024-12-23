import { IconButton, MoonIcon, SunIcon } from '@/ui-components';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      colorScheme="green"
      size="sm"
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};
