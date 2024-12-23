'use client';

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from '@chakra-ui/react';
import type { Key } from 'react';

// Створюємо кастомний тостер
export const toaster = createToaster({
  placement: 'bottom-end',
  pauseOnPageIdle: true,
});

export const Toaster = () => {
  return (
    <Portal>
      {/* Відображення основного тостера без `insetInline` */}
      <ChakraToaster>
        {toaster.visibleToasts.map(
          (toast: {
            id: Key | null | undefined;
            type: string;
            title: any;
            description: any;
            action: { label: any };
            meta: { closable: any };
          }) => (
            <Toast.Root key={toast.id} width={{ md: 'sm' }}>
              {toast.type === 'loading' ? (
                <Spinner size="sm" color="blue.500" />
              ) : (
                <Toast.Indicator />
              )}
              <Stack gap="1" flex="1" maxWidth="100%">
                {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
                {toast.description && (
                  <Toast.Description>{toast.description}</Toast.Description>
                )}
              </Stack>
              {toast.action && (
                <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
              )}
              {toast.meta?.closable && <Toast.CloseTrigger />}
            </Toast.Root>
          )
        )}
      </ChakraToaster>
    </Portal>
  );
};
