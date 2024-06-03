import * as Yup from 'yup';

export const ProductValidation = Yup.object().shape({
	name: Yup.string().required('Required'),
	categoryId: Yup.string().required('Required'),
	price: Yup.number().required('Required').min(1),
	quantity: Yup.number().required('Required').min(1),
});
