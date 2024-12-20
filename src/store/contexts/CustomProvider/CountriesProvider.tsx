import { useCountriesQuery } from '@/hooks';
import type { Country } from '@/shared';
import React, { createContext, ReactNode, useContext } from 'react';

type CountriesContextType = {
  isLoading: boolean;
  isFetching: boolean;
  countries: Country[];
  isError: boolean;
  error: Error | null;
};

const CountriesContext = createContext<CountriesContextType>({
  isLoading: false,
  isFetching: false,
  countries: [],
  isError: false,
  error: null,
});

export const CountriesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { countries, isLoading, isFetching, isError, error } =
    useCountriesQuery();

  return (
    <CountriesContext.Provider
      value={{ countries, isLoading, isFetching, isError, error }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountriesContext = () => useContext(CountriesContext);
