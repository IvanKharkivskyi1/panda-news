import {
  Button,
  Field,
  FormLabel,
  Input,
  Switch,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface AuthFormProps {
  onAuthComplete: () => void;
  onAuth: (
    email: string,
    password: string,
    isRegister: boolean
  ) => Promise<void>;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  onAuthComplete,
  onAuth,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = () => {
    onAuth(email, password, isRegister).then(onAuthComplete);
  };

  return (
    <VStack spacing={4}>
      <Field>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </Field>
      <Field>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </Field>
      <Field display="flex" alignItems="center">
        <FormLabel htmlFor="isRegister">Switch to Register</FormLabel>
        <Switch
          id="isRegister"
          isChecked={isRegister}
          onChange={(e: {
            target: { checked: boolean | ((prevState: boolean) => boolean) };
          }) => setIsRegister(e.target.checked)}
        />
      </Field>
      <Button onClick={handleSubmit}>
        {isRegister ? 'Register' : 'Login'}
      </Button>
    </VStack>
  );
};
