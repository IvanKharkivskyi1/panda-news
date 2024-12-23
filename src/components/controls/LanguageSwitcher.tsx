import React, { useMemo } from 'react';

import { Button, Flex, Image, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

import { useCountriesQuery } from '@/hooks';
import {
  AvailableFlags,
  AvailableLanguages,
  type LanguageKeys,
} from '@/shared';
import { useLanguage } from '@/store';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const { countries } = useCountriesQuery();

  const flags = useMemo(() => {
    const apiLanguages = countries[0]?.languages || {};
    const dynamicFlags = Object.entries(apiLanguages).reduce(
      (acc, [apiLanguageName]) => {
        const matchedKey = Object.keys(AvailableLanguages).find(
          langKey =>
            AvailableLanguages[langKey as LanguageKeys].toLowerCase() ===
            apiLanguageName.toLowerCase()
        );

        if (matchedKey) {
          acc[matchedKey as LanguageKeys] =
            AvailableFlags[matchedKey as LanguageKeys];
        }

        return acc;
      },
      {} as Record<LanguageKeys, string>
    );

    return { ...AvailableFlags, ...dynamicFlags };
  }, [countries]);

  const handleChangeLanguage = (lang: LanguageKeys) => {
    setLanguage(lang);
  };

  return (
    <MenuRoot>
      <MenuTrigger
        as={Button}
        colorScheme="green"
        size="sm"
        leftIcon={
          <Image
            src={flags[language]}
            alt={`${language} flag`}
            boxSize="20px"
            borderRadius="full"
          />
        }
        rightIcon={<ChevronDownIcon />}
      >
        {AvailableLanguages[language]}
      </MenuTrigger>
      <MenuContent>
        {Object.keys(AvailableLanguages).map(langKey => (
          <MenuItem
            key={langKey}
            onClick={() => handleChangeLanguage(langKey as LanguageKeys)}
          >
            <Flex alignItems="center" gap={2}>
              <Image
                src={flags[langKey as LanguageKeys]}
                alt={`${langKey} flag`}
                boxSize="20px"
                borderRadius="full"
              />
              {AvailableLanguages[langKey as LanguageKeys]}
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </MenuRoot>
  );
};
