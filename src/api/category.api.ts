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

export const getCategoryById = async (id: string) => {
	try {
		return await axios.get(`${NODERED_URL}/${id}`);
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

export const deleteCategoryById = async (id: string) => {
	try {
		return await axios.delete(`${NODERED_URL}/delete`, { data: { _id: id } });
	} catch (error) {
		console.error(error);
	}
};

export const updateCategoryById = async (data: CategoryDto) => {
	try {
		return await axios.put(`${NODERED_URL}/update`, data);
	} catch (error) {
		console.error(error);
	}
};
