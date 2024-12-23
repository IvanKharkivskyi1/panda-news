'use client';

import { auth } from '@/components/router/NavBar/Firebase';
import { toaster } from '@/components/ui/toaster';
import {
  Button,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  Portal,
  useDisclosure,
} from '@chakra-ui/react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { AuthForm } from './AuthForm';

export const AuthModal: React.FC = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleAuth = async (
    email: string,
    password: string,
    isRegister: boolean
  ) => {
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        toaster({ title: 'Registration successful!', status: 'success' });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toaster({ title: 'Login successful!', status: 'success' });
        onClose();
      }
    } catch (error) {
      toaster({
        title: isRegister ? 'Registration failed!' : 'Login failed!',
        description: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
      });
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    toaster({ title: 'Logged out!', status: 'info' });
  };

  return (
    <>
      <Button
        onClick={currentUser ? handleLogout : onOpen}
        size="sm"
        colorScheme="green"
      >
        {currentUser ? 'Logout' : 'Login/Register'}
      </Button>
      {open && (
        <Portal>
          <DialogContent>
            <DialogHeader>Authenticate</DialogHeader>
            <DialogBody>
              <AuthForm onAuthComplete={() => {}} onAuth={handleAuth} />
            </DialogBody>
            <DialogFooter>
              <Button onClick={onClose}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Portal>
      )}
    </>
  );
};
