import Table from '../ui/table/Table.tsx';
import TableRow from '../ui/table/TableRow.tsx';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';
import Button from '../ui/Button.tsx';

export default function Product() {
	const mockProducts = [
		{
			id: 1,
			name: 'Wireless Headphones',
			category: 'Electronics',
			price: 99.99,
			inStock: 25,
		},
		{
			id: 2,
			name: 'Cotton T-Shirt',
			category: 'Apparel',
			price: 24.99,
			inStock: 50,
		},
		{
			id: 3,
			name: 'Leather Wallet',
			category: 'Accessories',
			price: 39.99,
			inStock: 12,
		},
		{
			id: 4,
			name: 'Gaming Mouse',
			category: 'Electronics',
			price: 59.99,
			inStock: 30,
		},
		{
			id: 5,
			name: 'Denim Jeans',
			category: 'Apparel',
			price: 49.99,
			inStock: 20,
		},
		{
			id: 6,
			name: 'Ceramic Mug',
			category: 'Home',
			price: 14.99,
			inStock: 40,
		},
	];
	return (
		<div className='container px-4 md:px-6 py-8 mx-auto'>
			<div className='flex items-center justify-between mb-6'>
				<h1 className='text-3xl font-bold mb-6'>Product Management</h1>
				<Button text={'Create New Product'} />
			</div>
			<div className='overflow-x-auto'>
				<Table columns={['Name', 'Category', 'Price', 'Quantity', 'Actions']}>
					{mockProducts.map((product, index) => (
						<tr
							key={product.id}
							className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
						>
							<TableRow rowData={product.name} />
							<TableRow rowData={product.category} />
							<TableRow rowData={product.price.toFixed(2)} />
							<TableRow rowData={product.inStock} />
							<td className='px-4 py-3 text-right'>
								<div className='flex justify-end gap-2'>
									<PencilIcon className='size-6 cursor-pointer hover:text-gray-400' />
									<TrashIcon className='size-6 cursor-pointer text-red-600 hover:text-red-400' />
								</div>
							</td>
						</tr>
					))}
				</Table>
			</div>
		</div>
	);
}
