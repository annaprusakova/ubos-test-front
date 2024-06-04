import Table from '../../components/ui/table/Table.tsx';
import TableRow from '../../components/ui/table/TableRow.tsx';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';
import Button from '../../components/ui/Button.tsx';
import { useEffect, useState } from 'react';
import DeleteModal from '../../components/ui/modal/DeleteModal.tsx';
import ProductUpdateModal from './ProductUpdateModal.tsx';
import { ProductDto } from '../../dto/product.dto.ts';
import ProductCreateModal from './ProductCreateModal.tsx';
import { deleteProductById, getAllProduct } from '../../api/product.api.ts';
import { getCategoryById } from '../../api/category.api.ts';

export default function Product() {
	const [dataProduct, setDataProduct] = useState<ProductDto[]>([]);
	const [isUpdate, setIsUpdate] = useState<boolean>(false);
	const [isCreate, setIsCreate] = useState<boolean>(false);
	const [isDelete, setIsDelete] = useState<boolean>(false);
	const [isReloadData, setIsReloadData] = useState<boolean>(false);
	const [selectedProduct, setSelectedProduct] = useState<ProductDto | null>(
		null
	);

	const getData = async () => {
		const response = await getAllProduct();
		const data: ProductDto[] = [];
		if (response && response.status === 200) {
			for (const elem of response.data) {
				const response = await getCategoryById(elem.categoryId);
				if (response && response.status === 200) {
					data.push({
						...elem,
						categoryName: response.data[0].name,
						price: Number(elem.price),
						quantity: Number(elem.quantity),
					});
				} else {
					data.push({
						...elem,
						price: Number(elem.price),
						quantity: Number(elem.quantity),
					});
				}
			}
			setDataProduct(data);
			setIsReloadData(false);
		}
	};
	useEffect(() => {
		getData();
	}, [isReloadData]);

	const handleDeleteProduct = async () => {
		//TODO: add proper message
		const response = await deleteProductById(selectedProduct?._id || '');
		if (response && response.status === 200) {
			setIsReloadData(true);
			setIsDelete(false);
		}
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
								key={product._id}
								className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
							>
								<TableRow rowData={product.name} />
								<TableRow
									rowData={product.categoryName || product.categoryId}
								/>
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
					onReloadData={setIsReloadData}
					selectedItem={selectedProduct}
				/>
			)}
			<ProductCreateModal
				isOpen={isCreate}
				title={'Create New Product'}
				onReloadData={setIsReloadData}
				onClose={() => setIsCreate(false)}
			/>
		</>
	);
}
