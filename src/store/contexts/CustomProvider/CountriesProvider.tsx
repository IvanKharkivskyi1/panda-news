import { useCountriesQuery } from '@/hooks';
import type { Country } from '@/shared';
import React, { createContext, ReactNode, useContext, useState } from 'react';

type CountriesContextType = {
  isLoading: boolean;
  isFetching: boolean;
  countries: Country[];
  isError: boolean;
  error: Error | null;
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const CountriesContext = createContext<CountriesContextType>({
  isLoading: false,
  isFetching: false,
  countries: [],
  isError: false,
  error: null,
  isCollapsed: false,
  setIsCollapsed: () => {},
});

export const CountriesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { countries, isLoading, isFetching, isError, error } =
    useCountriesQuery();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        isLoading,
        isFetching,
        isError,
        error,
        isCollapsed,
        setIsCollapsed,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountriesContext = () => useContext(CountriesContext);
