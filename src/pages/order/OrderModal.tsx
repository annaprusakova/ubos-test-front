import { OrderDto } from '../../dto/order.dto.ts';
import { useFormik } from 'formik';
import { OrderValidation } from '../../validations/order.validation.ts';
import { Fieldset } from '@headlessui/react';
import InputField from '../../components/ui/InputField.tsx';
import Button from '../../components/ui/Button.tsx';

type OrderModalProps = {
	initValues: OrderDto;
	onSubmit: (values: OrderDto) => void;
	onClose: () => void;
	type: 'Update' | 'Create';
};

export default function OrderModal({
	initValues,
	type,
	onClose,
	onSubmit,
}: OrderModalProps) {
	const { errors, values, submitForm, setFieldValue } = useFormik({
		initialValues: initValues,
		onSubmit: onSubmit,
		validationSchema: OrderValidation,
		validateOnChange: true,
		validateOnBlur: false,
	});
	return (
		<div>
			<Fieldset className='space-y-8'>
				<InputField
					label={'Customer Name'}
					name={'customerName'}
					value={values.customerName}
					error={errors.customerName}
					onChange={(e) => setFieldValue('customerName', e.target.value)}
				/>
				<InputField
					label={'Cost'}
					name={'cost'}
					value={values.cost}
					error={errors.cost}
					onChange={(e) => setFieldValue('cost', e.target.value)}
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
