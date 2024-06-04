import { Field, Label, Select } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { CategoryDto } from '../../dto/category.dto.ts';
import { getAllCategories } from '../../api/category.api.ts';
import { FormikErrors } from 'formik';
import { ProductDto } from '../../dto/product.dto.ts';

type SelectProps = {
	label: string;
	name: string;
	value: string;
	error: string | undefined;
	setFieldValue: (
		field: string,
		value: any,
		shouldValidate?: boolean | undefined
	) => Promise<void> | Promise<FormikErrors<Omit<ProductDto, '_id'>>>;
};
export default function SelectCategory({
	label,
	name,
	value,
	error,
	setFieldValue,
}: SelectProps) {
	const [options, setOptions] = useState<CategoryDto[]>([]);
	const getCategories = async () => {
		const response = await getAllCategories();
		if (response && response.status === 200) {
			const data: CategoryDto[] = response.data;
			setOptions(data);
			setFieldValue('categoryId', value || data[0]._id);
		}
	};
	useEffect(() => {
		getCategories();
	}, []);

	return (
		<Field>
			<Label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
				{label}
			</Label>
			<Select
				className='flex h-10 mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
				name={name}
				value={value}
				onChange={(e) => setFieldValue('categoryId', e.target.value)}
			>
				{options.map((elem) => (
					<option key={elem._id} value={elem._id}>
						{elem.name}
					</option>
				))}
			</Select>
			{error && <div className='text-red-500 text-sm mt-1'>{error}</div>}
		</Field>
	);
}
