import { OrderDto } from '../../dto/order.dto.ts';
import { useFormik } from 'formik';
import { Fieldset } from '@headlessui/react';
import InputField from '../../components/ui/InputField.tsx';
import Button from '../../components/ui/Button.tsx';
import { orderValidation } from '../../validations/order.validation.ts';

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
		validationSchema: orderValidation,
		validateOnChange: false,
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
			</Fieldset>
			<div className='flex gap-4 mt-8'>
				<Button
					onClick={onClose}
					text={'Cancel'}
					styles={'bg-red-600 hover:bg-red-600/90'}
				/>
				<Button onClick={submitForm} text={type} />
			</div>
		</div>
	);
}
