import { Button, ButtonProps, useStyleConfig } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface NavButtonProps extends ButtonProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavButtonProps> = ({
  to,
  children,
  ...props
}) => {
  const styles = useStyleConfig('NavLink');

  return (
    <Button as={RouterLink} to={to} sx={styles} variant="plain" {...props}>
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
    </Button>
  );
};
