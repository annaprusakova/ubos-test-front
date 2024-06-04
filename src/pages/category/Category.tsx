import Button from '../../components/ui/Button.tsx';
import Table from '../../components/ui/table/Table.tsx';
import TableRow from '../../components/ui/table/TableRow.tsx';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import DeleteModal from '../../components/ui/modal/DeleteModal.tsx';
import { CategoryDto } from '../../dto/category.dto.ts';
import CategoryUpdateModal from './CategoryUpdateModal.tsx';
import CategoryCreateModal from './CategoryCreateModal.tsx';
import {
	deleteCategoryById,
	getAllCategories,
} from '../../api/category.api.ts';

export default function Category() {
	const [categoryData, setCategoryData] = useState<CategoryDto[]>([]);
	const [isUpdate, setIsUpdate] = useState<boolean>(false);
	const [isCreate, setIsCreate] = useState<boolean>(false);
	const [isDelete, setIsDelete] = useState<boolean>(false);
	const [isReloadData, setIsReloadData] = useState<boolean>(false);
	const [selectedCategory, setSelectedCategory] = useState<CategoryDto | null>(
		null
	);

	const getData = async () => {
		const response = await getAllCategories();
		if (response && response.status === 200) {
			const data: CategoryDto[] = response.data;
			setCategoryData(data);
			setIsReloadData(false);
		}
	};
	useEffect(() => {
		getData();
	}, [isReloadData]);

	const handleDeleteCategory = async () => {
		//TODO: add proper message
		const response = await deleteCategoryById(selectedCategory?._id || '');
		if (response && response.status === 200) {
			setIsReloadData(true);
			setIsDelete(false);
		}
	};

	return (
		<>
			<div className='container px-4 md:px-6 py-8 mx-auto'>
				<div className='flex items-center justify-between mb-6'>
					<h1 className='text-3xl font-bold mb-6'>Category Management</h1>
					<Button
						text={'Create New Category'}
						onClick={() => setIsCreate(true)}
					/>
				</div>
				<div className='overflow-x-auto'>
					<Table columns={['Name', 'Actions']}>
						{categoryData.map((category, index) => (
							<tr
								key={category._id}
								className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
							>
								<TableRow rowData={category.name} />
								<td className='px-4 py-3 text-right'>
									<div className='flex justify-end gap-2'>
										<PencilIcon
											className='size-6 cursor-pointer hover:text-gray-400'
											onClick={() => {
												setIsUpdate(true);
												setSelectedCategory(category);
											}}
										/>
										<TrashIcon
											className='size-6 cursor-pointer text-red-600 hover:text-red-400'
											onClick={() => {
												setIsDelete(true);
												setSelectedCategory(category);
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
				selectedItem={selectedCategory?.name || ''}
				onDelete={handleDeleteCategory}
				onClose={() => setIsDelete(false)}
				title={'Delete The Category'}
			/>
			{selectedCategory && (
				<CategoryUpdateModal
					isOpen={isUpdate}
					title={'Update Category'}
					onReloadData={setIsReloadData}
					onClose={() => setIsUpdate(false)}
					selectedItem={selectedCategory}
				/>
			)}
			<CategoryCreateModal
				isOpen={isCreate}
				title={'Create New Category'}
				onReloadData={setIsReloadData}
				onClose={() => setIsCreate(false)}
			/>
		</>
	);
}
