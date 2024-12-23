import { Field } from '@/components/ui/field';
import { SelectRoot } from '@chakra-ui/react';

export const FilterDropdown = ({
  options,
  onFilter,
  label,
}: {
  options: string[];
  onFilter: (value: string) => void;
  label: string;
}) => {
  return (
    <Field>
      <>{label}:</>
      <SelectRoot
        onChange={(e: { target: { value: string } }) =>
          onFilter(e.target.value)
        }
        size="lg"
        colorScheme="blue"
      >
        <option value="">All</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectRoot>
    </Field>
  );
};
