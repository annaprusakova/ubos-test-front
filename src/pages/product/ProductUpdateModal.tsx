import Modal from '../../components/ui/modal/Modal.tsx';
import { ProductDto } from '../../dto/product.dto.ts';
import ProductModal from './ProductModal.tsx';

type ProductEditModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	selectedItem: ProductDto;
};

export default function ProductUpdateModal({
	isOpen,
	onClose,
	title,
	selectedItem,
}: ProductEditModalProps) {
	const handleUpdateProduct = (values: ProductDto) => {
		//TODO: add request
		console.log(values);
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
