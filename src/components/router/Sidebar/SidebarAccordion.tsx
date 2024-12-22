import { useCountryFilters } from '@/hooks';
import { useCountriesContext } from '@/store';
import { Accordion } from '@chakra-ui/react';
import React from 'react';
import { CountryAccordionItem } from './CountryAccordionItem';

export const SidebarAccordion: React.FC = () => {
  const { countries } = useCountriesContext();
  const { filteredCountries } = useCountryFilters(countries);

  return (
    <Accordion
      allowMultiple
      sx={{ overflow: 'auto', maxHeight: 'calc(100vh - 100px)' }}
    >
      {filteredCountries.map(country => (
        <CountryAccordionItem
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.png}
          temperature={country.temperature}
          capital={country.capital[0]}
        />
      ))}
    </Accordion>
  );
};
