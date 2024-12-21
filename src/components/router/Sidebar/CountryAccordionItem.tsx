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
  isCollapsed: boolean;
}

export const CountryAccordionItem: React.FC<CountryAccordionItemProps> = ({
  name,
  flag,
  temperature,
  capital,
  isCollapsed,
}) => {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <AccordionButton>
            {!isCollapsed && (
              <Text
                flex={1}
                textAlign="left"
                fontWeight={isExpanded ? '600' : '400'}
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

          <AccordionPanel pb={4}>
            <Text>
              <strong>Temperature:</strong> {temperature}
            </Text>
            <Text mt={2}>
              <strong>Continent:</strong> {capital}
            </Text>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};
