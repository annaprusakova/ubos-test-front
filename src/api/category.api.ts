import axios from 'axios';
import { CategoryDto } from '../dto/category.dto.ts';

const NODERED_URL = import.meta.env.VITE_NODERED_URL + '/category';

export const getAllCategories = async () => {
	try {
		return await axios.get(`${NODERED_URL}/all`);
	} catch (error) {
		console.error(error);
	}
};

export const createNewCategory = async (data: Omit<CategoryDto, '_id'>) => {
	try {
		return await axios.post(`${NODERED_URL}/new`, data);
	} catch (error) {
		console.error(error);
	}
};
