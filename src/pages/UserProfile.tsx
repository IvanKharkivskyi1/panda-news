import { auth } from '@/components/router/NavBar/Firebase';
import { Box, Button, Text, useToast } from '@chakra-ui/react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

export const UserProfile: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const toast = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setCurrentUser(null);
    toast({
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
