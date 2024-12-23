import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

interface ClampedTextProps extends TextProps {
  children: React.ReactNode;
  lines?: number;
}

export const ClampedText: React.FC<ClampedTextProps> = ({
  children,
  lines = 2,
  ...props
}) => {
  return (
    <Text
      {...props}
      css={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: lines,
        overflow: 'hidden',
        whiteSpace: 'normal',
        overflowWrap: 'break-word',
        textOverflow: 'ellipsis',
      }}
    >
      {children}
    </Text>
  );
};
