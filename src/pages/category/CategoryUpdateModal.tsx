import Modal from '../../components/ui/modal/Modal.tsx';
import { CategoryDto } from '../../dto/category.dto.ts';
import CategoryModal from './CategoryModal.tsx';
import { updateCategoryById } from '../../api/category.api.ts';
import { messages } from '../../data/messages.ts';

type CategoryEditModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	selectedItem: CategoryDto;
	onReloadData: (value: boolean) => void;
	setMessage: (value: string) => void;
};

export default function CategoryUpdateModal({
	isOpen,
	onClose,
	title,
	selectedItem,
	onReloadData,
	setMessage,
}: CategoryEditModalProps) {
	const handleUpdateCategory = async (values: CategoryDto) => {
		const response = await updateCategoryById(values);
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
			<CategoryModal
				initValues={selectedItem}
				type={'Update'}
				onClose={onClose}
				onSubmit={handleUpdateCategory}
			/>
		</Modal>
	);
}
