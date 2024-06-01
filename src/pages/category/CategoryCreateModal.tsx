import Modal from '../../components/ui/modal/Modal.tsx';
import { CategoryDto } from '../../dto/category.dto.ts';
import CategoryModal from './CategoryModal.tsx';

type CategoryCreateModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
};

export default function CategoryCreateModal({
	isOpen,
	onClose,
	title,
}: CategoryCreateModalProps) {
	const initValues: CategoryDto = {
		id: 0,
		name: '',
	};

	const handleCreateCategory = (values: CategoryDto) => {
		//TODO: add request
		console.log(values);
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
