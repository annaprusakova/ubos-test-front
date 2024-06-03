import { OrderDto } from '../dto/order.dto.ts';

export const mockOrders: OrderDto[] = [
	{
		_id: 1,
		orderNumber: 212,
		customerName: 'user1',
		date: '12/12/2024',
		cost: 200,
	},
	{
		_id: 2,
		orderNumber: 323,
		customerName: 'user2',
		date: '12/12/2024',
		cost: 300,
	},
	{
		_id: 3,
		orderNumber: 353,
		customerName: 'user3',
		date: '12/12/2024',
		cost: 500,
	},
	{
		_id: 4,
		orderNumber: 343,
		customerName: 'user4',
		date: '12/12/2024',
		cost: 100,
	},
];
