import Modal from '../../components/ui/modal/Modal.tsx';
import { CategoryDto } from '../../dto/category.dto.ts';
import CategoryModal from './CategoryModal.tsx';
import { updateCategoryById } from '../../api/category.api.ts';

type CategoryEditModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	selectedItem: CategoryDto;
	onReloadData: (value: boolean) => void;
};

export default function CategoryUpdateModal({
	isOpen,
	onClose,
	title,
	selectedItem,
	onReloadData,
}: CategoryEditModalProps) {
	const handleUpdateCategory = async (values: CategoryDto) => {
		//TODO: add message
		const response = await updateCategoryById(values);
		if (response && response.status === 200) {
			onReloadData(true);
			onClose();
		}
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
