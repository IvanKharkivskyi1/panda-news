import { Field } from '@/components/ui/field';
import { Select } from '@/components/ui/select';

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
      <Select
        onChange={(e: { target: { value: string } }) =>
          onFilter(e.target.value)
        }
        size="lg"
        colorScheme="blue"
        variant="filled"
      >
        <option value="">All</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Field>
  );
};
