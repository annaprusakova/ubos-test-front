import { Field, Label, Input } from '@headlessui/react';
import { ChangeEvent } from 'react';

type InputProps = {
	label: string;
	name: string;
	value: string | number;
	error: string | undefined;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export default function InputField({
	label,
	name,
	value,
	error,
	onChange,
}: InputProps) {
	return (
		<Field>
			<Label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
				{label}
			</Label>
			<Input
				className='flex h-10 mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
				name={name}
				value={value}
				onChange={(e) => onChange(e)}
			/>
			{error && <div className='text-red-500 text-sm mt-1'>{error}</div>}
		</Field>
	);
}
