import { ProductDto } from '../dto/product.dto.ts';
import { CategoryDto } from '../dto/category.dto.ts';
import { OrderDto } from '../dto/order.dto.ts';

export const mockCategories: CategoryDto[] = [
	{
		id: 1,
		name: 'Electronics',
	},
	{
		id: 2,
		name: 'Apparel',
	},
	{
		id: 3,
		name: 'Accessories',
	},
	{
		id: 4,
		name: 'Home',
	},
];

export const mockProducts: ProductDto[] = [
	{
		id: 1,
		name: 'Wireless Headphones',
		category: mockCategories[0],
		price: 99.99,
		quantity: 25,
	},
	{
		id: 2,
		name: 'Cotton T-Shirt',
		category: mockCategories[1],
		price: 24.99,
		quantity: 50,
	},
	{
		id: 3,
		name: 'Leather Wallet',
		category: mockCategories[2],
		price: 39.99,
		quantity: 12,
	},
	{
		id: 4,
		name: 'Gaming Mouse',
		category: mockCategories[0],
		price: 59.99,
		quantity: 30,
	},
	{
		id: 5,
		name: 'Denim Jeans',
		category: mockCategories[1],
		price: 49.99,
		quantity: 20,
	},
	{
		id: 6,
		name: 'Ceramic Mug',
		category: mockCategories[3],
		price: 14.99,
		quantity: 40,
	},
];

export const mockOrders: OrderDto[] = [
	{
		id: 1,
		orderNumber: 212,
		customerName: 'user1',
		date: '12/12/2024',
		cost: 200,
	},
	{
		id: 2,
		orderNumber: 323,
		customerName: 'user2',
		date: '12/12/2024',
		cost: 300,
	},
	{
		id: 3,
		orderNumber: 353,
		customerName: 'user3',
		date: '12/12/2024',
		cost: 500,
	},
	{
		id: 4,
		orderNumber: 343,
		customerName: 'user4',
		date: '12/12/2024',
		cost: 100,
	},
];
