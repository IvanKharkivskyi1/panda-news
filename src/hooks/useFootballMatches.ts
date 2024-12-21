import {
  REACT_APP_FOOTBALL_API_KEY,
  REACT_APP_FOOTBALL_URL,
  type Match,
} from '@/shared';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchFootballMatches = async (): Promise<Match[]> => {
  const response = await axios.get<{ response: Match[] }>(
    `${REACT_APP_FOOTBALL_URL}/fixtures`,
    {
      headers: {
        'x-rapidapi-key': REACT_APP_FOOTBALL_API_KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io',
      },
      params: { date: new Date().toISOString().split('T')[0] },
    }
  );
  return response.data.response;
};

export const useFootballMatches = () => {
  return useQuery<Match[]>({
    queryKey: ['footballMatches'],
    queryFn: fetchFootballMatches,
    staleTime: 60 * 1000,
  });
};
export { Match };

