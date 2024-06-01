import Modal from '../../components/ui/modal/Modal.tsx';
import { OrderDto } from '../../dto/order.dto.ts';
import OrderModal from './OrderModal.tsx';

type OrderEditModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	selectedItem: OrderDto;
};

export default function OrderUpdateModal({
	isOpen,
	onClose,
	title,
	selectedItem,
}: OrderEditModalProps) {
	const handleUpdateOrder = (values: OrderDto) => {
		//TODO: add request
		console.log(values);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={title}>
			<OrderModal
				initValues={selectedItem}
				type={'Update'}
				onClose={onClose}
				onSubmit={handleUpdateOrder}
			/>
		</Modal>
	);
}
