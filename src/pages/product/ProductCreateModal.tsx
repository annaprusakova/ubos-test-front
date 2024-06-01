import Modal from '../../components/ui/modal/Modal.tsx';
import { ProductDto } from '../../dto/product.dto.ts';
import ProductModal from './ProductModal.tsx';
import { mockCategories } from '../../data/mockData.ts';

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
		id: 0,
		name: '',
		category: mockCategories[0],
		price: 0,
		quantity: 0,
	};
	const handleCreateProduct = (values: ProductDto) => {
		//TODO: add request
		console.log(values);
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
