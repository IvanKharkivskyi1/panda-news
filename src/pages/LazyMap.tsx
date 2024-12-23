import { chakra } from '@chakra-ui/react';

const Iframe = chakra('iframe');

type LazyMapProps = {
  boundingBox: string;
};

export const LazyMap: React.FC<LazyMapProps> = ({ boundingBox }) => (
  <div>
    <Iframe
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${boundingBox}&layer=mapnik`}
      allowFullScreen
      loading="lazy"
      title="First country map"
      width="100%"
      height="300px"
    />
  </div>
);

export default LazyMap;
