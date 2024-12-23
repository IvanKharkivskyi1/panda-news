import { auth } from '@/components/router/NavBar/Firebase';
import { toaster } from '@/components/ui/toaster';
import { Box, Button, Text } from '@chakra-ui/react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

export const UserProfile: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setCurrentUser(null);
    toaster.create({
      title: 'Logged out!',
      description: 'You have been logged out.',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      {currentUser ? (
        <>
          <Text>{`Logged in as ${currentUser.email}`}</Text>
          <Button colorScheme="green" onClick={handleLogout}>
            Log Out
          </Button>
        </>
      ) : (
        <Text>You are not logged in.</Text>
      )}
    </Box>
  );
};
