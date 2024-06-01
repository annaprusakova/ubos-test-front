import { CategoryDto } from './category.dto.ts';

export type ProductDto = {
	id: number;
	name: string;
	category: CategoryDto;
	price: number;
	quantity: number;
};
