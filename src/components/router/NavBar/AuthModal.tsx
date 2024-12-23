import { auth } from '@/components/router/NavBar/Firebase';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
        toast({ title: 'Registration successful!', status: 'success' });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast({ title: 'Login successful!', status: 'success' });
        onClose();
      }
    } catch (error) {
      toast({
        title: isRegister ? 'Registration failed!' : 'Login failed!',
        description: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
      });
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    toast({ title: 'Logged out!', status: 'info' });
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
      <Modal open={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Authenticate</ModalHeader>
          <ModalBody>
            <AuthForm onAuthComplete={() => {}} onAuth={handleAuth} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
