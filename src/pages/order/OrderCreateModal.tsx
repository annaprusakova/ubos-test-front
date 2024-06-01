import Modal from '../../components/ui/modal/Modal.tsx';
import { OrderDto } from '../../dto/order.dto.ts';
import OrderModal from './OrderModal.tsx';

type OrderCreateModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
};

export default function OrderCreateModal({
	isOpen,
	onClose,
	title,
}: OrderCreateModalProps) {
	const initValues: OrderDto = {
		id: 0,
		orderNumber: 0,
		customerName: '',
		date: new Date().toDateString(),
		cost: 0,
	};

	const handleCreateOrder = (values: OrderDto) => {
		//TODO: add request
		console.log(values);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={title}>
			<OrderModal
				initValues={initValues}
				type={'Create'}
				onClose={onClose}
				onSubmit={handleCreateOrder}
			/>
		</Modal>
	);
}
