import { Box, Tooltip } from '@chakra-ui/react';
import type {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';

export const TooltipHover = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  label: string; // Tooltip label
}) => {
  const { children, label } = props; // Destructure label and children

  return (
    <Tooltip label={label}>
      <Box>{children}</Box>
    </Tooltip>
  );
};