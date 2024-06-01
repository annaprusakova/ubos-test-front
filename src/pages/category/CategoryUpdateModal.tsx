import Modal from '../../components/ui/modal/Modal.tsx';
import { CategoryDto } from '../../dto/category.dto.ts';
import CategoryModal from './CategoryModal.tsx';

type CategoryEditModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	selectedItem: CategoryDto;
};

export default function CategoryUpdateModal({
	isOpen,
	onClose,
	title,
	selectedItem,
}: CategoryEditModalProps) {
	const handleUpdateCategory = (values: CategoryDto) => {
		//TODO: add request
		console.log(values);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={title}>
			<CategoryModal
				initValues={selectedItem}
				type={'Update'}
				onClose={onClose}
				onSubmit={handleUpdateCategory}
			/>
		</Modal>
	);
}
