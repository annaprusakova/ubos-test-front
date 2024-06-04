import { Field, Label, Select } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { FormikErrors } from 'formik';
import { ProductDto } from '../../dto/product.dto.ts';
import { getAllProduct } from '../../api/product.api.ts';

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
export default function SelectProduct({
	label,
	name,
	value,
	error,
	setFieldValue,
}: SelectProps) {
	const [options, setOptions] = useState<ProductDto[]>([]);

	const getProducts = async () => {
		const response = await getAllProduct();
		if (response && response.status === 200) {
			const data: ProductDto[] = response.data;
			setOptions(data);
			setFieldValue('productId', value || data[0]._id);
		}
	};
	useEffect(() => {
		getProducts();
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
				onChange={(e) => setFieldValue('productId', e.target.value)}
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
