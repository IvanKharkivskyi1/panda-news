import { Field } from '@/components/ui/field';
import { SelectRoot, Text } from '@chakra-ui/react';
import React from 'react';

type SortOption = {
  label: string;
  value: 'name-asc' | 'name-desc' | 'temperature-asc' | 'temperature-desc';
};

type SortDropdownProps = {
  options: SortOption[];
  onSort: (key: string, direction: 'asc' | 'desc') => void;
  label: string;
};

export const SortDropdown: React.FC<SortDropdownProps> = ({
  options,
  onSort,
  label,
}) => {
  const dropdownId = `sort-dropdown-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <Field>
      <Text>{label}</Text>
      <SelectRoot
        id={dropdownId}
        size="lg"
        colorScheme="green"
        onChange={(e: {
          target: { value: { split: (arg0: string) => [any, any] } };
        }) => {
          const [key, direction] = e.target.value.split('-');
          onSort(key, direction as 'asc' | 'desc');
        }}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectRoot>
    </Field>
  );
};
