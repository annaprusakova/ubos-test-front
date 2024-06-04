import * as Yup from 'yup';

export const orderValidation = Yup.object().shape({
	customerName: Yup.string().required('Required'),
});
