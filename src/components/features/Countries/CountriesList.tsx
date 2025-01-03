import { Grid, VStack } from '@chakra-ui/react';

import { EmptyState } from '@/components';
import { usePagination } from '@/hooks';
import { PAGINATION, type Country } from '@/shared';

import { CountryCard } from './CountryCard';
import { CountryPaginate } from './CountryPaginate';

type CountriesListProps = {
  countries: Country[];
};

export const CountriesList: React.FC<CountriesListProps> = ({ countries }) => {
  const { ITEMS_PER_PAGE } = PAGINATION;
  const { paginatedItems, handlePageClick, totalPages } = usePagination(
    countries,
    ITEMS_PER_PAGE
  );

  if (!countries || countries.length === 0) {
    return (
      <EmptyState message="No countries found. Try adjusting your search or filters." />
    );
  }

  return (
    <VStack w="full" py={4}>
      <CountryPaginate
        pageCount={totalPages}
        onPageChange={({ selected }) => handlePageClick(selected)}
      />
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap={4}
        w="full"
      >
        {paginatedItems.map(country => (
          <CountryCard
            key={country.code || country.name.common}
            name={country.name}
            capital={country.capital || 'No capital available'}
            continent={country.continents?.[0] || 'Unknown'}
            flag={country.flags.png}
            countries={countries}
          />
        ))}
      </Grid>
      <CountryPaginate
        pageCount={totalPages}
        onPageChange={({ selected }) => handlePageClick(selected)}
      />
    </VStack>
  );
};
