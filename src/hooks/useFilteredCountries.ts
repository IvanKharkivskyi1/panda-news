import type { Country } from '@/shared';
import { useEffect, useState } from 'react';

export const useFilteredCountries = (
  countries: (Country & { temperature?: number })[],
  query: string,
  selectedRegion: string | null,
  sortKey: string,
  sortDirection: 'asc' | 'desc'
) => {
  const [filteredCountries, setFilteredCountries] = useState<
    (Country & { temperature?: number })[]
  >([]);

  useEffect(() => {
    let results = [...countries];

    if (query) {
      results = results.filter(country =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedRegion) {
      results = results.filter(
        country =>
          (typeof country.continents?.[0] === 'string'
            ? country.continents?.[0].toLowerCase()
            : '') === selectedRegion.toLowerCase()
      );
    }

    results.sort((a, b) => {
      if (sortKey === 'name') {
        return sortDirection === 'asc'
          ? a.name.common.localeCompare(b.name.common)
          : b.name.common.localeCompare(a.name.common);
      }
      if (sortKey === 'temperature') {
        return sortDirection === 'asc'
          ? (a.temperature || 0) - (b.temperature || 0)
          : (b.temperature || 0) - (a.temperature || 0);
      }
      return 0;
    });

    setFilteredCountries(results);
  }, [countries, query, selectedRegion, sortKey, sortDirection]);

  return filteredCountries;
};
