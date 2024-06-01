import Button from '../../components/ui/Button.tsx';
import Table from '../../components/ui/table/Table.tsx';
import TableRow from '../../components/ui/table/TableRow.tsx';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import DeleteModal from '../../components/ui/modal/DeleteModal.tsx';
import { OrderDto } from '../../dto/order.dto.ts';
import { mockOrders } from '../../data/mockData.ts';
import OrderUpdateModal from './OrderUpdateModal.tsx';
import OrderCreateModal from './OrderCreateModal.tsx';

export default function Order() {
	//TODO: add real data
	const orderData: OrderDto[] = mockOrders;
	const [isUpdate, setIsUpdate] = useState<boolean>(false);
	const [isCreate, setIsCreate] = useState<boolean>(false);
	const [isDelete, setIsDelete] = useState<boolean>(false);
	const [selectedOrder, setSelectedOrder] = useState<OrderDto | null>(null);

	return (
		<>
			<div className='container px-4 md:px-6 py-8 mx-auto'>
				<div className='flex items-center justify-between mb-6'>
					<h1 className='text-3xl font-bold mb-6'>Order Management</h1>
					<Button text={'Create New Order'} onClick={() => setIsCreate(true)} />
				</div>
				<div className='overflow-x-auto'>
					<Table
						columns={[
							'Order Number',
							'Customer Name',
							'Order Date',
							'Total Cost',
							'Actions',
						]}
					>
						{orderData.map((order, index) => (
							<tr
								key={order.id}
								className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
							>
								<TableRow rowData={order.orderNumber} />
								<TableRow rowData={order.customerName} />
								<TableRow rowData={order.date} />
								<TableRow rowData={order.cost} />
								<td className='px-4 py-3 text-right'>
									<div className='flex justify-end gap-2'>
										<PencilIcon
											className='size-6 cursor-pointer hover:text-gray-400'
											onClick={() => {
												setIsUpdate(true);
												setSelectedOrder(order);
											}}
										/>
										<TrashIcon
											className='size-6 cursor-pointer text-red-600 hover:text-red-400'
											onClick={() => {
												setIsDelete(true);
												setSelectedOrder(order);
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
				selectedItem={`${selectedOrder?.orderNumber} order`}
				onDelete={() => setIsDelete(false)}
				onClose={() => setIsDelete(false)}
				title={'Delete The Category'}
			/>
			{selectedOrder && (
				<OrderUpdateModal
					isOpen={isUpdate}
					title={'Update Order'}
					selectedItem={selectedOrder}
					onClose={() => setIsUpdate(false)}
				/>
			)}
			<OrderCreateModal
				isOpen={isCreate}
				title={'Create New Order'}
				onClose={() => setIsCreate(false)}
			/>
		</>
	);
}
