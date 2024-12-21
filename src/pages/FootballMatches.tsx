import { useFootballMatches, type Match } from '@/hooks/useFootballMatches';
import type { Country } from '@/shared';
import { useCountriesContext } from '@/store';
import {
  Box,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

const groupMatchesByRegionAndCountry = (
  matches: Match[],
  countries: Country[]
) => {
  return matches.reduce(
    (acc, match) => {
      const leagueCountry = match.league.country;
      const country = countries.find(c => c.name.common === leagueCountry);

      if (country) {
        const region = country.region;

        if (!acc[region]) {
          acc[region] = {};
        }

        if (!acc[region][country.name.common]) {
          acc[region][country.name.common] = {};
        }

        if (!acc[region][country.name.common][match.league.name]) {
          acc[region][country.name.common][match.league.name] = [];
        }

        acc[region][country.name.common][match.league.name].push(match);
      }

      return acc;
    },
    {} as Record<string, Record<string, Record<string, Match[]>>>
  );
};

export const FootballMatches = () => {
  const { data: matches, isLoading, error } = useFootballMatches();
  const { countries } = useCountriesContext();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading matches</Text>;

  const groupedMatches = groupMatchesByRegionAndCountry(
    matches || [],
    countries || []
  );

  return (
    <Tabs isLazy variant="soft-rounded" colorScheme="green">
      <TabList overflowX="auto" maxW="1050px" pb={1}>
        {Object.keys(groupedMatches).map(region => (
          <Tab key={region}>{region}</Tab>
        ))}
      </TabList>
      <TabPanels> 
        {Object.entries(groupedMatches).map(([region, countries]) => (
          <TabPanel key={region}>
            <Tabs isLazy>
              <TabList overflowX="auto" maxW="1050px" pb={1}>
                {Object.keys(countries).map(countryName => (
                  <Tab key={countryName}>{countryName}</Tab>
                ))}
              </TabList>
              <TabPanels>
                {Object.entries(countries).map(([countryName, leagues]) => (
                  <TabPanel key={countryName}>
                    <Tabs isLazy>
                      <TabList overflowX="auto" maxW="1050px" pb={1}>
                        {Object.keys(leagues).map(leagueName => (
                          <Tab key={leagueName} maxW="100px">
                            {leagueName}
                          </Tab>
                        ))}
                      </TabList>
                      <TabPanels>
                        {Object.entries(leagues).map(
                          ([leagueName, matches]) => (
                            <TabPanel key={leagueName}>
                              <SimpleGrid columns={4} gap={2}>
                                {matches.map(match => (
                                  <Box
                                    key={match.fixture.id}
                                    p={4}
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    boxShadow="md"
                                    bg={
                                      match.fixture.status.short === 'FT'
                                        ? 'green.500'
                                        : undefined
                                    }
                                  >
                                    <Text fontWeight="bold" mb={2}>
                                      {match.teams.home.name} vs{' '}
                                      {match.teams.away.name}
                                    </Text>
                                    <Image
                                      src={match.league.logo}
                                      alt={leagueName}
                                      boxSize="50px"
                                      mb={4}
                                    />
                                    <Text>
                                      Score: {match.goals.home} -{' '}
                                      {match.goals.away}
                                    </Text>
                                    <Text>
                                      Date:{' '}
                                      {new Date(
                                        match.fixture.date
                                      ).toLocaleString()}
                                    </Text>
                                  </Box>
                                ))}
                              </SimpleGrid>
                            </TabPanel>
                          )
                        )}
                      </TabPanels>
                    </Tabs>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
