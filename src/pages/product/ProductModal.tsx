import { Fieldset } from '@headlessui/react';
import InputField from '../../components/ui/InputField.tsx';
import SelectField from '../../components/ui/SelectField.tsx';
import Button from '../../components/ui/Button.tsx';
import { useFormik } from 'formik';
import { ProductValidation } from '../../validations/product.validation.ts';
import { ProductDto } from '../../dto/product.dto.ts';
import { mockCategories } from '../../data/mockData.ts';

type ProductModalProps = {
	initValues: ProductDto;
	onSubmit: (values: ProductDto) => void;
	onClose: () => void;
	type: 'Update' | 'Create';
};
export default function ProductModal({
	initValues,
	onSubmit,
	onClose,
	type,
}: ProductModalProps) {
	const { errors, values, submitForm, setFieldValue } = useFormik({
		initialValues: initValues,
		onSubmit: onSubmit,
		validationSchema: ProductValidation,
		validateOnChange: true,
		validateOnBlur: false,
	});
	return (
		<div>
			<Fieldset className='space-y-8'>
				<InputField
					label={'Name'}
					name={'name'}
					value={values.name}
					error={errors.name}
					onChange={(e) => setFieldValue('name', e.target.value)}
				/>
				<SelectField
					label={'Category'}
					name={'category'}
					options={mockCategories}
					value={values.category}
					error={errors.category?.name}
					onChange={(e) => setFieldValue('category', e.target.value)}
				/>
				<InputField
					label={'Price'}
					name={'price'}
					value={values.price}
					error={errors.price}
					onChange={(e) => setFieldValue('price', e.target.value)}
				/>
				<InputField
					label={'Quantity'}
					name={'quantity'}
					value={values.quantity}
					error={errors.quantity}
					onChange={(e) => setFieldValue('quantity', e.target.value)}
				/>
			</Fieldset>
			<div className='flex gap-4 mt-8'>
				<Button
					onClick={onClose}
					text={'Cancel'}
					styles={'bg-red-600 hover:bg-red-600/90'}
				/>
				<Button
					onClick={() => {
						submitForm();
						onClose();
					}}
					text={type}
				/>
			</div>
		</div>
	);
}
