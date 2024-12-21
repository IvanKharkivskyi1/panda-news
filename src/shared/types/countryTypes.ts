export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  code: string;
  continent: string;
  languages: string[];
  currency: string;
  continents: string[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
}

export interface RawCountry {
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  region?: string;
  population?: number;
  flags?: {
    png?: string;
    svg?: string;
  };
  cca2?: string;
  continents?: string[];
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string }>;
}
export type Match = {
  fixture: {
    id: number;
    date: string;
    status: {
      short: string;
    };
  };
  league: {
    name: string;
    logo: string;
    country: string;
  };
  teams: {
    home: { name: string; logo: string };
    away: { name: string; logo: string };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
};
