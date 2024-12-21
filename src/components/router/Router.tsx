import { LanguageSwitcher } from '@/components';
import {
  Calendar,
  Counter,
  Countries,
  Dashboard,
  FootballMatches,
  New,
  UserProfile,
} from '@/pages';
import { Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './MainLayout';
import { NavBar } from './NavBar';

export const Router: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex flexDir="column" h="100vh" justifyContent="space-between">
      <NavBar />
      <MainLayout>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/matches" element={<FootballMatches />} />
          <Route path="/new" element={<New />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </MainLayout>
      <Flex
        bg={colorMode === 'light' ? 'green.200' : 'mint.700'}
        p={4}
        justify="center"
      >
        <LanguageSwitcher />
      </Flex>
    </Flex>
  );
};
