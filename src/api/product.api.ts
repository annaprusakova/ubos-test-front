import { ProductDto } from '../dto/product.dto.ts';
import axios from 'axios';

const NODERED_URL = import.meta.env.VITE_NODERED_URL + '/product';

export const getAllProduct = async () => {
	try {
		return await axios.get(`${NODERED_URL}/all`);
	} catch (error) {
		console.error(error);
	}
};

export const getProductById = async (id: string) => {
	try {
		return await axios.get(`${NODERED_URL}/${id}`);
	} catch (error) {
		console.error(error);
	}
};

export const createNewProduct = async (data: Omit<ProductDto, '_id'>) => {
	try {
		return await axios.post(`${NODERED_URL}/new`, data);
	} catch (error) {
		console.error(error);
	}
};

export const deleteProductById = async (id: string) => {
	try {
		return await axios.delete(`${NODERED_URL}/delete`, { data: { _id: id } });
	} catch (error) {
		console.error(error);
	}
};

export const updateProductById = async (data: ProductDto) => {
	try {
		return await axios.put(`${NODERED_URL}/update`, data);
	} catch (error) {
		console.error(error);
	}
};
