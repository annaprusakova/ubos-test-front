import Modal from '../../components/ui/modal/Modal.tsx';
import { ProductDto } from '../../dto/product.dto.ts';
import ProductModal from './ProductModal.tsx';
import { updateProductById } from '../../api/product.api.ts';
import { messages } from '../../data/messages.ts';

type ProductEditModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	selectedItem: ProductDto;
	onReloadData: (value: boolean) => void;
	setMessage: (value: string) => void;
};

export default function ProductUpdateModal({
	isOpen,
	onClose,
	title,
	selectedItem,
	onReloadData,
	setMessage,
}: ProductEditModalProps) {
	const handleUpdateProduct = async (values: ProductDto) => {
		const response = await updateProductById(values);
		if (response && response.status === 200) {
			onReloadData(true);
			onClose();
			setMessage(messages.updateSuccess);
		} else {
			setMessage(messages.error);
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={title}>
			<ProductModal
				initValues={selectedItem}
				type={'Update'}
				onClose={onClose}
				onSubmit={handleUpdateProduct}
			/>
		</Modal>
	);
}
