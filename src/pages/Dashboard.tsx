import {
  ChartByLetter,
  ChartByTemperature,
  DateWidget,
  FilterDropdown,
} from '@/components';
import { useCountriesQuery, useCountryFilters, useIsMobile } from '@/hooks';
import { Continents } from '@/shared';
import { Card } from '@/ui-components';
import {
  Box,
  Container,
  SimpleGrid,
  Skeleton,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { lazy, Suspense, useEffect, useMemo, useState } from 'react';

const LazyMap = lazy(() => import('./LazyMap'));

export const Dashboard = () => {
  const continentOptions = Object.values(Continents);
  const { countries } = useCountriesQuery();
  const { handleFilter, filteredCountries } = useCountryFilters(countries);
  const [boundingBox, setBoundingBox] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const firstCountry = useMemo(
    () => filteredCountries[0]?.maps,
    [filteredCountries]
  );

  const isMobile = useIsMobile();

  useEffect(() => {
    const cache = new Map();

    const fetchBoundingBox = async (relationUrl: string) => {
      const match = relationUrl.match(/relation\/(\d+)/);
      if (match) {
        const relationId = match[1];
        if (cache.has(relationId)) {
          setBoundingBox(cache.get(relationId));
          return;
        }

        setLoading(true);
        try {
          const response = await fetch(
            `https://overpass-api.de/api/interpreter?data=[out:json];relation(${relationId});out bb;`
          );
          const data = await response.json();
          const { minlat, minlon, maxlat, maxlon } = data.elements[0].bounds;
          const bounds = `${minlon},${minlat},${maxlon},${maxlat}`;
          cache.set(relationId, bounds);
          setBoundingBox(bounds);
        } catch (error) {
          console.error('Error fetching bounding box:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (firstCountry?.openStreetMaps) {
      fetchBoundingBox(firstCountry.openStreetMaps);
    }
  }, [firstCountry]);

  useEffect(() => {
    if (boundingBox) {
      const timer = setTimeout(() => setShowMap(true), 1000);
      return () => {
        clearTimeout(timer);
      };
    }
    return undefined;
  }, [boundingBox]);

  return (
    <Box flexGrow={1}>
      <Container maxW="400px" mb={4}>
        <FilterDropdown
          options={continentOptions}
          onFilter={handleFilter}
          label="Filter by Region"
        />
      </Container>
      <SimpleGrid columns={isMobile ? 1 : 2} gap={4} mb={8}>
        <DateWidget initialDate="2024-12-19" />
        <ChartByLetter filteredCountries={filteredCountries} />
        <ChartByTemperature
          filteredCountries={filteredCountries}
          title="Temperature Distribution"
        />

        {firstCountry && boundingBox && (
          <Card>
            <Text fontSize="lg" mb={4}>
              Map Preview for the First Filtered Country1:
            </Text>
            {loading ? (
              <Skeleton height="300px" width="100%" />
            ) : showMap ? (
              <Suspense fallback={<Spinner />}>
                <LazyMap boundingBox={boundingBox} />
              </Suspense>
            ) : null}
          </Card>
        )}
      </SimpleGrid>
      <Text>Lorem ipsum</Text>
      <Text>Lorem ipsum</Text>
    </Box>
  );
};
