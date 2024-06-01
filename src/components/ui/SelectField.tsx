import { Field, Label, Select } from '@headlessui/react';
import { ChangeEvent } from 'react';
import { CategoryDto } from '../../dto/category.dto.ts';

type SelectProps = {
	label: string;
	name: string;
	options: CategoryDto[];
	value: CategoryDto;
	error: string | undefined;
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};
export default function SelectField({
	label,
	name,
	options,
	value,
	error,
	onChange,
}: SelectProps) {
	return (
		<Field>
			<Label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
				{label}
			</Label>
			<Select
				className='flex h-10 mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
				name={name}
				value={value.name}
				onChange={(e) => onChange(e)}
			>
				{options.map((elem) => (
					<option key={elem.id}>{elem.name}</option>
				))}
			</Select>
			{error && <div className='text-red-500 text-sm mt-1'>{error}</div>}
		</Field>
	);
}
