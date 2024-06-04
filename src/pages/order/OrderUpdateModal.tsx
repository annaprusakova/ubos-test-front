import Modal from '../../components/ui/modal/Modal.tsx';
import { OrderDto } from '../../dto/order.dto.ts';
import OrderModal from './OrderModal.tsx';
import { updateOrderById } from '../../api/order.api.ts';
import { messages } from '../../data/messages.ts';

type OrderEditModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	selectedItem: OrderDto;
	onReloadData: (value: boolean) => void;
	setMessage: (value: string) => void;
};

export default function OrderUpdateModal({
	isOpen,
	onClose,
	title,
	selectedItem,
	onReloadData,
	setMessage,
}: OrderEditModalProps) {
	const handleUpdateOrder = async (values: OrderDto) => {
		const response = await updateOrderById(values);
		if (response && response.status === 200) {
			setMessage(messages.updateSuccess);
			onReloadData(true);
			onClose();
		} else {
			setMessage(messages.error);
		}
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
