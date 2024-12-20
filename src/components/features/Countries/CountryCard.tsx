import React from 'react';

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { Card } from '@/ui-components';

import { CountryCardSkeleton, WeatherInfo } from '@/components';
import { useEnrichedCountries } from '@/hooks';
import type { Country } from '@/shared';

type CountryCardProps = {
  name: {
    common: string;
    official: string;
  };
  capital: string[] | null;
  continent: string;
  flag: string | null;
  countries: Country[];
};

export const CountryCard: React.FC<CountryCardProps> = ({
  name,
  capital,
  continent,
  flag,
  countries,
}) => {
  const capitalCity = capital?.[0] || null;
  const { isLoading } = useEnrichedCountries(countries);
  return isLoading ? (
    <CountryCardSkeleton />
  ) : (
    <Card>
      <Box>
        <Heading size="sm" mb={2}>
          {name.common}
        </Heading>
        <Flex>
          {flag ? (
            <Image src={flag} alt={`${name.common} flag`} maxW="40px" />
          ) : (
            <Text>No flag available</Text>
          )}
        </Flex>
      </Box>
      <Text>Capital: {capitalCity || 'No capital available'}</Text>
      <Text>Continent: {continent}</Text>
      {capitalCity ? (
        <WeatherInfo countryName={name.common} />
      ) : (
        <Text>No weather information available.</Text>
      )}
    </Card>
  );
};
