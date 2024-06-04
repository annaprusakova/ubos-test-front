import Modal from '../../components/ui/modal/Modal.tsx';
import { ProductDto } from '../../dto/product.dto.ts';
import ProductModal from './ProductModal.tsx';
import { createNewProduct } from '../../api/product.api.ts';
import { messages } from '../../data/messages.ts';

type ProductCreateModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	onReloadData: (value: boolean) => void;
	setMessage: (value: string) => void;
};

export default function ProductCreateModal({
	isOpen,
	onClose,
	title,
	onReloadData,
	setMessage,
}: ProductCreateModalProps) {
	const initValues: ProductDto = {
		_id: '',
		name: '',
		categoryId: '',
		price: 0,
		quantity: 0,
	};

	const handleCreateProduct = async (values: ProductDto) => {
		delete values._id;
		const response = await createNewProduct(values);
		if (response && response.status === 200) {
			onReloadData(true);
			onClose();
			setMessage(messages.createSuccess);
		} else {
			setMessage(messages.error);
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={title}>
			<ProductModal
				initValues={initValues}
				type={'Create'}
				onClose={onClose}
				onSubmit={handleCreateProduct}
			/>
		</Modal>
	);
}
