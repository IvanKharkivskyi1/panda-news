import { AuthForm } from '@/components/router/NavBar/AuthForm';
import { auth } from '@/components/router/NavBar/Firebase';
import { toaster } from '@/components/ui/toaster';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';

export const New: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleAuth = async (
    email: string,
    password: string,
    isRegister: boolean
  ): Promise<void> => {
    try {
      if (isRegister) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setCurrentUser(userCredential.user);
        toaster.create({
          title: 'Registration successful!',
          description: 'You can now log in.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setCurrentUser(userCredential.user);
        toaster.create({
          title: 'Login successful!',
          description: `Welcome back, ${email}!`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        toaster.create({
          title: isRegister ? 'Registration failed!' : 'Login failed!',
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const handleLogout = async (): Promise<void> => {
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
    <Box p={6}>
      {currentUser ? (
        <>
          <Heading size="lg" mb={4}>
            Protected Content
          </Heading>
          <Text mb={4}>
            Welcome to the protected section of the application. Only logged-in
            users can access this page.
          </Text>
          <Button colorScheme="green" onClick={handleLogout}>
            Log Out
          </Button>
        </>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center">
          <AuthForm onAuthComplete={() => {}} onAuth={handleAuth} />
        </Box>
      )}
    </Box>
  );
};
