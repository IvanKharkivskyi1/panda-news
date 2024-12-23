import { Field } from '@/components/ui/field';
import { Switch } from '@/components/ui/switch';
import { Button, Input, Text, VStack } from '@chakra-ui/react';
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
    <VStack gap={4}>
      <Field>
        <Text>Email</Text>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </Field>
      <Field>
        <Text>Password</Text>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </Field>
      <Field display="flex" alignItems="center" gap={4}>
        <Text>Switch to Register</Text>
        <Switch
          isChecked={isRegister}
          onChange={(e: {
            target: { checked: boolean | ((prevState: boolean) => boolean) };
          }) => setIsRegister(e.target.checked)}
          id="isRegister"
          colorScheme="green"
        />
      </Field>
      <Button onClick={handleSubmit}>
        {isRegister ? 'Register' : 'Login'}
      </Button>
    </VStack>
  );
};
