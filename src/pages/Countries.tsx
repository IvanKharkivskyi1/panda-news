import { Box, HStack, Text } from '@chakra-ui/react';

import {
  CountriesList,
  FilterDropdown,
  SearchBar,
  SortDropdown,
} from '@/components';

import { useCountryFilters } from '@/hooks';
import { Continents } from '@/shared';
import { useCountriesContext } from '@/store';

export const Countries = () => {
  const { countries, isError, error } = useCountriesContext();
  const { filteredCountries, handleSearch, handleFilter, handleSort } =
    useCountryFilters(countries);

  const continentOptions = Object.values(Continents);

  if (isError) {
    return <Text>Error: {(error as Error).message}</Text>;
  }

  return (
    <Box w="full">
      <HStack>
        <SearchBar onSearch={handleSearch} />
        <HStack flexShrink={0}>
          <FilterDropdown
            options={continentOptions}
            onFilter={handleFilter}
            label="Filter by Region"
          />
          <SortDropdown
            options={[
              { label: 'Name (A-Z)', value: 'name-asc' },
              { label: 'Name (Z-A)', value: 'name-desc' },
              { label: 'Temperature (Low-High)', value: 'temperature-asc' },
              { label: 'Temperature (High-Low)', value: 'temperature-desc' },
            ]}
            onSort={handleSort}
            label="Sort by:"
          />
        </HStack>
      </HStack>
      <CountriesList countries={filteredCountries} />
    </Box>
  );
};
