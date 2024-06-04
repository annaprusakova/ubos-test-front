import Modal from '../../components/ui/modal/Modal.tsx';
import { CategoryDto } from '../../dto/category.dto.ts';
import CategoryModal from './CategoryModal.tsx';
import { createNewCategory } from '../../api/category.api.ts';

type CategoryCreateModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	onReloadData: (value: boolean) => void;
};

export default function CategoryCreateModal({
	isOpen,
	onClose,
	title,
	onReloadData,
}: CategoryCreateModalProps) {
	const initValues: CategoryDto = {
		name: '',
	};

	const handleCreateCategory = async (values: CategoryDto) => {
		delete values._id;
		const response = await createNewCategory(values);
		if (response && response.status === 200) {
			onReloadData(true);
			onClose();
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={title}>
			<CategoryModal
				initValues={initValues}
				type={'Create'}
				onClose={onClose}
				onSubmit={handleCreateCategory}
			/>
		</Modal>
	);
}
