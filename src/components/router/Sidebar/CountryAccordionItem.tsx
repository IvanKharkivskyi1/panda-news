import { AccordionItem } from '@/components/ui/accordion';
import { useCountriesContext } from '@/store';
import { AccordionItemTrigger, Image, Text } from '@chakra-ui/react';
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
      {(props: { isExpanded: boolean }) => {
        const shouldExpand = !isCollapsed && props.isExpanded;

        return (
          <>
            <AccordionItemTrigger>
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
            </AccordionItemTrigger>

            {shouldExpand && (
              <AccordionItemTrigger>
                <Text>
                  <strong>Temperature:</strong> {temperature ?? 'N/A'}
                </Text>
                <Text mt={2}>
                  <strong>Capital:</strong> {capital}
                </Text>
              </AccordionItemTrigger>
            )}
          </>
        );
      }}
    </AccordionItem>
  );
};
