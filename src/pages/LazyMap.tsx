// LazyMap.tsx
import { Box } from '@chakra-ui/react';

type LazyMapProps = {
  boundingBox: string;
};

export const LazyMap: React.FC<LazyMapProps> = ({ boundingBox }) => (
  <Box>
    <Box
      as="iframe"
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${boundingBox}&layer=mapnik`}
      width="100%"
      height="300px"
      border="0"
      allowFullScreen
      loading="lazy"
      title="First country map"
    />
  </Box>
);

export default LazyMap;
