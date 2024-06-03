import { Fieldset } from '@headlessui/react';
import InputField from '../../components/ui/InputField.tsx';
import Button from '../../components/ui/Button.tsx';
import { CategoryDto } from '../../dto/category.dto.ts';
import { useFormik } from 'formik';
import { CategoryValidation } from '../../validations/category.validation.ts';

type CategoryModalProps = {
	initValues: CategoryDto;
	onSubmit: (values: CategoryDto) => void;
	onClose: () => void;
	type: 'Update' | 'Create';
};

export default function CategoryModal({
	initValues,
	onSubmit,
	type,
	onClose,
}: CategoryModalProps) {
	const { errors, values, submitForm, setFieldValue } = useFormik({
		initialValues: initValues,
		onSubmit: onSubmit,
		validationSchema: CategoryValidation,
		validateOnChange: false,
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
					}}
					text={type}
				/>
			</div>
		</div>
	);
}
