import * as Yup from 'yup';

export const OrderValidation = Yup.object().shape({
	customerName: Yup.string().required('Required'),
	quantity: Yup.number().required('Required').min(1),
});
