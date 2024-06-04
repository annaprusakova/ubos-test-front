import Modal from '../../components/ui/modal/Modal.tsx';
import { ProductDto } from '../../dto/product.dto.ts';
import ProductModal from './ProductModal.tsx';
import { updateProductById } from '../../api/product.api.ts';

type ProductEditModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	selectedItem: ProductDto;
	onReloadData: (value: boolean) => void;
};

export default function ProductUpdateModal({
	isOpen,
	onClose,
	title,
	selectedItem,
	onReloadData,
}: ProductEditModalProps) {
	const handleUpdateProduct = async (values: ProductDto) => {
		//TODO: add message
		const response = await updateProductById(values);
		if (response && response.status === 200) {
			onReloadData(true);
			onClose();
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
