import { useFootballMatches, type Match } from '@/hooks/useFootballMatches';
import type { Country } from '@/shared';
import { useCountriesContext } from '@/store';
import { ClampedText, TooltipHover } from '@/ui-components';
import { Box, Grid, Image, Tabs, Text } from '@chakra-ui/react';

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
  const { isCollapsed, countries } = useCountriesContext();
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading matches</Text>;

  const groupedMatches = groupMatchesByRegionAndCountry(
    matches || [],
    countries || []
  );

  return (
    <Tabs.Root
      isLazy
      colorScheme="green"
      maxW={isCollapsed ? '1300px' : '1120px'}
      p={0}
    >
      <Tabs.List overflowX="auto" pb={0.5}>
        {Object.keys(groupedMatches).map(region => (
          <Tabs.Trigger maxH="48px" lineHeight="14px" key={region}>
            {region}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <TabPanels>
        {Object.entries(groupedMatches).map(([region, countries]) => (
          <TabPanel px={0} key={region}>
            <Tabs.Root
              isLazy
              colorScheme="green"
              maxW={isCollapsed ? '1300px' : '1120px'}
              p={0}
            >
              <Tabs.List overflowX="auto" pb={0.5}>
                {Object.keys(countries).map(countryName => (
                  <Tabs.Trigger maxH="48px" lineHeight="14px" key={countryName}>
                    {countryName}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              <TabPanels>
                {Object.entries(countries).map(([countryName, leagues]) => (
                  <TabPanel px={0} key={countryName}>
                    <Tabs.Root
                      isLazy
                      colorScheme="green"
                      maxW={isCollapsed ? '1300px' : '1120px'}
                      p={0}
                    >
                      <Tabs.List overflowX="auto" pb={0.5}>
                        {Object.keys(leagues).map(leagueName => (
                          <TooltipHover label={leagueName} key={leagueName}>
                            <Tab key={leagueName} maxH="48px" lineHeight="14px">
                              <ClampedText lines={2} maxW="100px">
                                {leagueName}
                              </ClampedText>
                            </Tab>
                          </TooltipHover>
                        ))}
                      </Tabs.List>
                      <TabPanels>
                        {Object.entries(leagues).map(
                          ([leagueName, matches]) => (
                            <TabPanel px={0} key={leagueName}>
                              <Grid
                                gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                                gap={4}
                                w="full"
                              >
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
                              </Grid>
                            </TabPanel>
                          )
                        )}
                      </TabPanels>
                    </Tabs.Root>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs.Root>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs.Root>
  );
};
