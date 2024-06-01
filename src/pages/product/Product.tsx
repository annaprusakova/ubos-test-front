import Table from '../../components/ui/table/Table.tsx';
import TableRow from '../../components/ui/table/TableRow.tsx';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';
import Button from '../../components/ui/Button.tsx';
import { useState } from 'react';
import DeleteModal from '../../components/ui/modal/DeleteModal.tsx';
import ProductUpdateModal from './ProductUpdateModal.tsx';
import { ProductDto } from '../../dto/product.dto.ts';
import { mockProducts } from '../../data/mockData.ts';
import ProductCreateModal from './ProductCreateModal.tsx';

export default function Product() {
	//TODO: add real data
	const dataProduct: ProductDto[] = mockProducts;
	const [isUpdate, setIsUpdate] = useState<boolean>(false);
	const [isCreate, setIsCreate] = useState<boolean>(false);
	const [isDelete, setIsDelete] = useState<boolean>(false);
	const [selectedProduct, setSelectedProduct] = useState<ProductDto | null>(
		null
	);

	const handleDeleteProduct = () => {
		//TODO: add request
		console.log(selectedProduct);
		setIsDelete(false);
	};

	return (
		<>
			<div className='container px-4 md:px-6 py-8 mx-auto'>
				<div className='flex items-center justify-between mb-6'>
					<h1 className='text-3xl font-bold mb-6'>Product Management</h1>
					<Button
						text={'Create New Product'}
						onClick={() => setIsCreate(true)}
					/>
				</div>
				<div className='overflow-x-auto'>
					<Table columns={['Name', 'Category', 'Price', 'Quantity', 'Actions']}>
						{dataProduct.map((product, index) => (
							<tr
								key={product.id}
								className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
							>
								<TableRow rowData={product.name} />
								<TableRow rowData={product.category.name} />
								<TableRow rowData={product.price.toFixed(2)} />
								<TableRow rowData={product.quantity} />
								<td className='px-4 py-3 text-right'>
									<div className='flex justify-end gap-2'>
										<PencilIcon
											className='size-6 cursor-pointer hover:text-gray-400'
											onClick={() => {
												setIsUpdate(true);
												setSelectedProduct(product);
											}}
										/>
										<TrashIcon
											className='size-6 cursor-pointer text-red-600 hover:text-red-400'
											onClick={() => {
												setIsDelete(true);
												setSelectedProduct(product);
											}}
										/>
									</div>
								</td>
							</tr>
						))}
					</Table>
				</div>
			</div>
			<DeleteModal
				isDelete={isDelete}
				selectedItem={selectedProduct?.name || ''}
				onDelete={handleDeleteProduct}
				onClose={() => setIsDelete(false)}
				title={'Delete the product'}
			/>
			{selectedProduct && (
				<ProductUpdateModal
					isOpen={isUpdate}
					onClose={() => setIsUpdate(false)}
					title={'Update product'}
					selectedItem={selectedProduct}
				/>
			)}
			<ProductCreateModal
				isOpen={isCreate}
				title={'Create New Product'}
				onClose={() => setIsCreate(false)}
			/>
		</>
	);
}
