import { useNavLinkStyles } from '@/ui-components';
import React from 'react';
import { LinkProps, Link as RouterLink } from 'react-router-dom';

interface NavLinkProps extends Omit<LinkProps, 'color'> {
  to: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children, ...props }) => {
  const styles = useNavLinkStyles();

  return (
    <RouterLink to={to} {...props} {...styles}>
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
    </RouterLink>
  );
};
