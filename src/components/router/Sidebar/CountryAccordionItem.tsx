import { useCountriesContext } from '@/store';
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

interface CountryAccordionItemProps {
  name: string;
  flag: string;
  temperature?: number;
  capital: string;
}

export const CountryAccordionItem: React.FC<CountryAccordionItemProps> = ({
  name,
  flag,
  temperature,
  capital,
}) => {
  const { isCollapsed } = useCountriesContext();

  return (
    <AccordionItem>
      {({ isExpanded }) => {
        const shouldExpand = !isCollapsed && isExpanded;

        return (
          <>
            <AccordionButton>
              {!isCollapsed && (
                <Text
                  flex={1}
                  textAlign="left"
                  fontWeight={shouldExpand ? '600' : '400'}
                >
                  {name}
                </Text>
              )}
              <Image
                src={flag}
                alt={`${name} flag`}
                boxSize="20px"
                mr={4}
                borderRadius="full"
              />
            </AccordionButton>

            {shouldExpand && (
              <AccordionPanel pb={4}>
                <Text>
                  <strong>Temperature:</strong> {temperature}
                </Text>
                <Text mt={2}>
                  <strong>Capital:</strong> {capital}
                </Text>
              </AccordionPanel>
            )}
          </>
        );
      }}
    </AccordionItem>
  );
};
