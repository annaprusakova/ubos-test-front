import Modal from '../../components/ui/modal/Modal.tsx';
import { ProductDto } from '../../dto/product.dto.ts';
import ProductModal from './ProductModal.tsx';
import { createNewProduct } from '../../api/product.api.ts';

type ProductCreateModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
};

export default function ProductCreateModal({
	isOpen,
	onClose,
	title,
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
		//TODO: add message
		if (response && response.status === 200) {
			onClose();
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
