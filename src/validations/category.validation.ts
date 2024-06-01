import * as Yup from 'yup';

export const CategoryValidation = Yup.object().shape({
	name: Yup.string().required('Required'),
});
